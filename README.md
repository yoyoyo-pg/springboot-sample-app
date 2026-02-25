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