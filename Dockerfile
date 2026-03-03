# ビルドステージ
# Amazon Corretto 17 (AL2023) でJARをビルド
FROM public.ecr.aws/docker/library/amazoncorretto:17-al2023-headless AS build
WORKDIR /workspace
COPY . .
RUN chmod +x gradlew && ./gradlew bootJar -x test --no-daemon

# 実行ステージ
# Amazon Corretto 17 (AL2023-headless) で軽量なランタイムイメージを使用
FROM public.ecr.aws/docker/library/amazoncorretto:17-al2023-headless
WORKDIR /app

# タイムゾーンをJSTに設定
ENV TZ=Asia/Tokyo

# ロケールを日本語に設定
ENV LANG=ja_JP.UTF-8
RUN yum install -y glibc-langpack-ja && yum clean all

# ビルドステージから成果物をコピー
COPY --from=build /workspace/build/libs/*.jar app.jar

# ポート8080を公開
EXPOSE 8080

# Spring Boot アプリケーションを起動
ENTRYPOINT ["java","-jar","/app/app.jar"]
