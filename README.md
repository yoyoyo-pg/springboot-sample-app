# Spring Boot Sample Application

このプロジェクトはSpring Bootを使用したシンプルなWebアプリケーションのサンプルです。Thymeleafテンプレートエンジンを使用してHello Worldメッセージを表示します。

## プロジェクトの概要

- **フレームワーク**: Spring Boot 3.2.0
- **言語**: Java 17
- **Webサーバー**: 組み込みTomcat (Spring Bootに同梱)
- **テンプレートエンジン**: Thymeleaf
- **ビルドツール**: Gradle

## プロジェクト構造

```
src/
├── main/
│   ├── java/
│   │   └── com/example/
│   │       ├── SpringbootSampleAppApplication.java  # メインアプリケーションクラス
│   │       └── HelloController.java                 # Webコントローラー
│   └── resources/
│       ├── application.properties                   # アプリケーション設定ファイル
│       └── templates/
│           └── hello.html                           # Thymeleafテンプレートファイル
└── test/
    └── java/
        └── com/example/                             # テストクラス（未実装）
build.gradle                                         # Gradle設定ファイル
```

## 実行方法

### 前提条件

- Java 17以上がインストールされていること
- Gradleがインストールされていること（またはGradle Wrapperを使用）

### アプリケーションの起動

1. プロジェクトをクローンまたはダウンロードします。

2. コマンドラインでプロジェクトのルートディレクトリに移動します：

   ```
   cd springboot-sample-app
   ```

3. Gradleを使ってアプリケーションをビルドします：

   ```
   ./gradlew build
   ```

4. アプリケーションを起動します：

   ```
   ./gradlew bootRun
   ```

5. ブラウザで以下のURLにアクセスします：
   - http://localhost:8080/hello

   Hello Worldメッセージが表示されます。

## アプリケーションの説明

### HelloController.java

- `@Controller`アノテーションでWeb MVCコントローラーとして機能
- `/hello`エンドポイントでGETリクエストを処理
- Modelオブジェクトにデータを追加してThymeleafテンプレートに渡す

### hello.html (Thymeleafテンプレート)

- Thymeleafを使用して動的なHTMLを生成
- `th:text`属性でModelから渡されたメッセージを表示
- 現在の日時も表示（デモ用）

### SpringbootSampleAppApplication.java

- `@SpringBootApplication`アノテーションでSpring Bootアプリケーションのメインクラス
- 自動設定とコンポーネントスキャンを有効化

## 開発・テスト

### テストの実行

```
./gradlew test
```

### 依存関係の更新

```
./gradlew dependencies --refresh-dependencies
```

## カスタマイズ例

- **ポート変更**: `application.properties`に`server.port=8081`を追加
- **テンプレートのカスタマイズ**: `src/main/resources/templates/`内のファイルを編集
- **新しいエンドポイントの追加**: `HelloController.java`に新しいメソッドを追加

## 参考リンク

````markdown
# Spring Boot Sample Application

このプロジェクトはSpring Bootを使用したシンプルなWebアプリケーションのサンプルです。Thymeleafテンプレートエンジンを使用してHello Worldメッセージを表示します。

## プロジェクトの概要

- **フレームワーク**: Spring Boot 3.2.0
- **言語**: Java 17
- **Webサーバー**: 組み込みTomcat (Spring Bootに同梱)
- **テンプレートエンジン**: Thymeleaf
- **ビルドツール**: Gradle

## プロジェクト構造

```
src/
├── main/
│   ├── java/
│   │   └── com/example/
│   │       ├── SpringbootSampleAppApplication.java  # メインアプリケーションクラス
│   │       └── HelloController.java                 # Webコントローラー
│   └── resources/
│       ├── application.properties                   # アプリケーション設定ファイル
│       └── templates/
│           └── hello.html                           # Thymeleafテンプレートファイル
└── test/
    └── java/
        └── com/example/                             # テストクラス（未実装）
build.gradle                                         # Gradle設定ファイル
```

## 実行方法

### 前提条件

- Java 17以上がインストールされていること
- Gradleがインストールされていること（またはGradle Wrapperを使用）

### アプリケーションの起動

1. プロジェクトをクローンまたはダウンロードします。

2. コマンドラインでプロジェクトのルートディレクトリに移動します：

   ```
   cd springboot-sample-app
   ```

3. Gradleを使ってアプリケーションをビルドします：

   ```
   ./gradlew build
   ```

4. アプリケーションを起動します：

   ```
   ./gradlew bootRun
   ```

5. ブラウザで以下のURLにアクセスします：
   - http://localhost:8080/hello

   Hello Worldメッセージが表示されます。

## アプリケーションの説明

### HelloController.java

- `@Controller`アノテーションでWeb MVCコントローラーとして機能
- `/hello`エンドポイントでGETリクエストを処理
- Modelオブジェクトにデータを追加してThymeleafテンプレートに渡す

### hello.html (Thymeleafテンプレート)

- Thymeleafを使用して動的なHTMLを生成
- `th:text`属性でModelから渡されたメッセージを表示
- 現在の日時も表示（デモ用）

### SpringbootSampleAppApplication.java

- `@SpringBootApplication`アノテーションでSpring Bootアプリケーションのメインクラス
- 自動設定とコンポーネントスキャンを有効化

## 開発・テスト

### テストの実行

```
./gradlew test
```

### 依存関係の更新

```
./gradlew dependencies --refresh-dependencies
```

## カスタマイズ例

- **ポート変更**: `application.properties`に`server.port=8081`を追加
- **テンプレートのカスタマイズ**: `src/main/resources/templates/`内のファイルを編集
- **新しいエンドポイントの追加**: `HelloController.java`に新しいメソッドを追加

## 参考リンク

- [Spring Boot公式ドキュメント](https://spring.io/projects/spring-boot)
- [Thymeleaf公式ドキュメント](https://www.thymeleaf.org/documentation.html)
- [Gradle公式ドキュメント](https://gradle.org/documentation/)

  ```
  mvn spring-boot:run
  ```

  または、IDEから`SpringbootSampleAppApplication.java`の`main`メソッドを実行します。

5. ブラウザで以下のURLにアクセスします：

   ```
   http://localhost:8080/hello
   ```

   "Hello World!" というメッセージが表示されます。

### 停止方法

- コマンドラインでCtrl+Cを押す
- IDEの停止ボタンをクリック

## APIエンドポイント

- **GET /hello**: Hello Worldメッセージを返します
  - レスポンス: `Hello World!`

## 詳細な説明

### SpringbootSampleAppApplication.java

- `@SpringBootApplication`アノテーションにより、Spring Bootの自動設定が有効化されます
- `main`メソッドでアプリケーションを起動し、組み込みTomcatサーバーが開始されます

### HelloController.java

- `@RestController`アノテーションにより、REST APIコントローラーとして機能します
- `@GetMapping("/hello")`で`/hello`エンドポイントを定義しています

### pom.xml

- Spring Bootの依存関係とMavenプラグインを設定しています
- `spring-boot-starter-web`により、Webアプリケーションに必要なライブラリが含まれます

## 次のステップ

このサンプルを拡張するには：

- 追加のRESTエンドポイントを作成
- データベースとの連携（JPA, H2など）
- セキュリティ設定（Spring Security）
- テストコードの追加（JUnit, Mockito）

## トラブルシューティング

- ポート8080が使用中の場合、`application.properties`で`server.port=8081`などを設定して変更してください
- Javaバージョンが合わない場合、pom.xmlの`<java.version>`を調整してください

## Dockerでの利用

- 本リポジトリにはマルチステージビルドを行う`Dockerfile`を追加しています。ビルドと実行はコンテナ内で完結し、ランタイムはAmazon Corretto 17を使用します（参照: [Dockerfile](Dockerfile)）。

- イメージのビルド:

```bash
docker build -t springboot-sample-app .
```

- コンテナの起動（ポート8080を公開）:

```bash
docker run -p 8080:8080 --rm springboot-sample-app
```

- すでにローカルでJARをビルドしている場合は、以下の手順でJARを作成してからイメージを作ることもできます。これを使うとコンテナ内でのビルドを省略できます。

```bash
./gradlew bootJar -x test
docker build -t springboot-sample-app .
```

- Windows (PowerShell) の場合はGradle Wrapperを実行する際にパス表記を変えてください:

```powershell
.\gradlew.bat bootJar -x test
docker build -t springboot-sample-app .
```

- アクセス先: http://localhost:8080/hello

## AWS CodePipeline での自動デプロイ

本リポジトリには AWS CodeBuild 用の `buildspec.yml` (参照: [buildspec.yml](buildspec.yml)) が含まれています。CodePipeline と CodeBuild を使用して自動的に Docker イメージをビルドし、Amazon ECR にプッシュできます。

### buildspec.yml の概要

- **pre_build**: Amazon ECR へログイン、イメージ名とタグの設定
- **build**: Dockerfile を使用して Docker イメージをビルド
- **post_build**: ビルド済みイメージを ECR にプッシュ、ECS デプロイ用の `imagedefinitions.json` を生成

### CodePipeline のセットアップ

1. AWS CodeBuild プロジェクトを作成し、このリポジトリをソースに指定
2. CodeBuild のサービスロールに以下の権限を付与:
   - ECR へのプッシュ権限 (`ecr:GetDownloadUrlForLayer`, `ecr:PutImage` など)
   - ログ出力権限 (`logs:CreateLogGroup`, `logs:CreateLogStream` など)

3. CodeBuild の環境変数に以下を追加:
   - `AWS_ACCOUNT_ID`: AWS アカウント ID
   - `AWS_DEFAULT_REGION`: AWS リージョン（例：`ap-northeast-1`）

4. CodePipeline でソース (GitHub/CodeCommit) → CodeBuild → デプロイ (ECS) の流れを構成

### 注意事項

- ECR にリポジトリ `springboot-sample-app` が事前に存在する必要があります
- $AWS_DEFAULT_REGION は CodeBuild 環境変数から自動取得されます
- `imagedefinitions.json` は ECS タスク定義の更新に用いられます

```

## Infrastructure (AWS CDK)

このリポジトリには `infra/` ディレクトリが含まれ、AWS CDK を使って以下のリソースを構築することができます。

- Amazon ECR リポジトリ (`springboot-sample-app`) - Docker イメージ用
- AWS App Runner サービス - ECR からコンテナを自動デプロイ
- CodeBuild プロジェクト - ソースコードのビルドおよび ECR へのプッシュ
- CodePipeline パイプライン - GitHub からソースを取得し、CodeBuild を実行

### セットアップとデプロイ

1. `cd infra` でディレクトリを移動。
2. 依存関係をインストール (`npm install`) と TypeScript のコンパイル (`npm run build`)。
3. AWS CLI の認証情報が有効な環境で `cdk deploy` を実行。
   - スタック名は `InfraStack`。
   - デプロイ時に CodePipeline や App Runner などが作成されます。
4. CodePipeline のソースには GitHub の `main` ブランチが使用されます。
   - 初回は GitHub OAuth トークンを Secrets Manager に保存し、`infra-stack.ts` の `github-token` シークレット名を指定してください。
   -（CodeStar Connections を利用する場合は設定を変更してください）

### その他

* スタック削除時は `ecr.Repository` に `RemovalPolicy.DESTROY` が設定されているため、構築されたリポジトリも削除されます。
* App Runner のエンドポイント URL はスタック出力として表示されます。

```

```

```
````
