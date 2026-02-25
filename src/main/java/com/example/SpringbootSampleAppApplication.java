package com.example;

// Spring Bootアプリケーションのメインクラスをインポート
// このアノテーションは、Spring Bootアプリケーションのエントリーポイントを示し、
// 自動設定、コンポーネントスキャン、設定プロパティの有効化を行います
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring Bootアプリケーションのメインクラス
 * このクラスはアプリケーションの起動点であり、Spring Bootの自動設定を有効化します
 */
@SpringBootApplication // このアノテーションがSpring Bootアプリケーションの設定を自動で行います
public class SpringbootSampleAppApplication {

    /**
     * アプリケーションのメインエントリーポイント
     * JVMがこのメソッドを呼び出してアプリケーションを開始します
     *
     * @param args コマンドライン引数（このサンプルでは使用しません）
     */
    public static void main(String[] args) {
        // SpringApplication.run()メソッドでSpring Bootアプリケーションを起動
        // 第1引数: メイン設定クラス（このクラス自身）
        // 第2引数: コマンドライン引数
        // このメソッドは組み込みTomcatサーバーを起動し、アプリケーションを初期化します
        SpringApplication.run(SpringbootSampleAppApplication.class, args);
    }

}