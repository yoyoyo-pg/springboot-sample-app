package com.example;

// Spring Web MVCのコントローラー関連クラスをインポート
// Controller: Web MVCコントローラーを示すアノテーション（ビューを返す）
// RequestMapping: HTTPリクエストをメソッドにマッピングするアノテーション
// GetMapping: HTTP GETリクエストをメソッドにマッピングするアノテーション
// Model: ビューにデータを渡すためのインターフェース
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Hello World Webコントローラー
 * このクラスはHTTPリクエストを処理し、Thymeleafテンプレートを使用してHTMLレスポンスを返します
 * Controllerアノテーションにより、このクラスはWeb MVCコントローラーとして機能します
 */
@Controller // このクラスがWeb MVCコントローラーであることを示します
public class HelloController {

    /**
     * Hello Worldエンドポイント
     * HTTP GETリクエスト "/hello" に対して、Thymeleafテンプレート "hello" を返します
     * テンプレートにはメッセージデータを渡します
     *
     * @param model ビューにデータを渡すためのModelオブジェクト
     * @return "hello" というテンプレート名（src/main/resources/templates/hello.html）
     */
    @GetMapping("/hello") // HTTP GET "/hello" リクエストをこのメソッドにマッピング
    public String hello(Model model) {
        // モデルにメッセージを追加（Thymeleafテンプレートで使用）
        model.addAttribute("message", "Hello World!");
        // "hello" テンプレートを返す（拡張子.htmlは自動的に付加される）
        return "hello";
    }

}