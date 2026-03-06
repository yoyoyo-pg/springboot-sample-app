import * as cdk from "aws-cdk-lib/core";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as apprunner from "aws-cdk-lib/aws-apprunner";
import * as iam from "aws-cdk-lib/aws-iam";
import * as codebuild from "aws-cdk-lib/aws-codebuild";
import * as codepipeline from "aws-cdk-lib/aws-codepipeline";
import * as codepipeline_actions from "aws-cdk-lib/aws-codepipeline-actions";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";

import { Construct } from "constructs";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ECR Repository
    const ecrRepository = new ecr.Repository(this, "SpringBootSampleAppRepo", {
      repositoryName: "springboot-sample-app",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      imageScanOnPush: true,
      encryptionKey: undefined,
    });

    // IAM Role for AppRunner
    const appRunnerRole = new iam.Role(this, "AppRunnerRole", {
      assumedBy: new iam.ServicePrincipal("apprunner.amazonaws.com"),
    });

    // IAM Role for ECR access
    const ecrAccessRole = new iam.Role(this, "AppRunnerECRAccessRole", {
      assumedBy: new iam.ServicePrincipal("apprunner.amazonaws.com"),
    });
    ecrRepository.grantPull(ecrAccessRole);

    // AppRunner Service
    const apprunnerService = new apprunner.Service(
      this,
      "SpringBootSampleAppService",
      {
        source: apprunner.Source.fromEcr({
          imageRepository: ecrRepository,
          tag: "latest",
        }),
        instanceRole: appRunnerRole,
        cpu: apprunner.Cpu.ONE_VCPU,
        memory: apprunner.Memory.TWO_GB,
        desiredCount: 1,
        publiclyAccessible: true,
      },
    );

    // ---------------------------------------------------------------------
    // CI/CD: GitHub (main) via CodeStar Connections + CodeBuild + CodePipeline
    // ---------------------------------------------------------------------

    // CodeBuild project to build and push Docker image
    const buildProject = new codebuild.PipelineProject(this, "BuildProject", {
      projectName: "SpringBootSampleAppBuild",
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_6_0,
        privileged: true,
      },
      environmentVariables: {
        REPOSITORY_URI: { value: ecrRepository.repositoryUri },
      },
      buildSpec: codebuild.BuildSpec.fromObject({
        version: "0.2",
        phases: {
          pre_build: {
            commands: [
              "echo Logging in to Amazon ECR...",
              "aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $REPOSITORY_URI",
            ],
          },
          build: {
            commands: [
              "echo Build started on `date`",
              "docker build -t $REPOSITORY_URI:latest .",
              "docker push $REPOSITORY_URI:latest",
            ],
          },
        },
      }),
    });

    // Grant CodeBuild permission to pull/push from/to ECR
    ecrRepository.grantPullPush(buildProject.role!);

    // CodePipeline
    const sourceOutput = new codepipeline.Artifact();
    const buildOutput = new codepipeline.Artifact();

    const pipeline = new codepipeline.Pipeline(this, "Pipeline", {
      pipelineName: "SpringBootSampleAppPipeline",
    });

    // GitHub source stage (requiring OAuth token in Secrets Manager)
    const githubToken = secretsmanager.Secret.fromSecretNameV2(
      this,
      "GithubToken",
      "github-token",
    );

    pipeline.addStage({
      stageName: "Source",
      actions: [
        new codepipeline_actions.GitHubSourceAction({
          actionName: "GitHub_Source",
          owner: "yoyoyo-pg",
          repo: "springboot-sample-app",
          oauthToken: githubToken.secretValue,
          output: sourceOutput,
          branch: "main",
        }),
      ],
    });

    pipeline.addStage({
      stageName: "Build",
      actions: [
        new codepipeline_actions.CodeBuildAction({
          actionName: "Docker_Build",
          project: buildProject,
          input: sourceOutput,
          outputs: [buildOutput],
        }),
      ],
    });

    // Outputs
    new cdk.CfnOutput(this, "ECRRepositoryUri", {
      value: ecrRepository.repositoryUri,
      description: "ECR Repository URI",
    });

    new cdk.CfnOutput(this, "AppRunnerServiceUrl", {
      value: apprunnerService.serviceUrl,
      description: "App Runner Service URL",
    });

    new cdk.CfnOutput(this, "AppRunnerServiceArn", {
      value: apprunnerService.serviceArn,
      description: "App Runner Service ARN",
    });
  }
}
