$(function(){
    $("input").on("click",function(){
        // alert("hi");
        // 將H1標題 替換成Hello
        // $("h1").text("Hello");

        // 將H1標題 替換成 列表項目的最後一項
        // $("h1").text($("li:last").text());

        // 將H1標題 替換成 列表項目的第一項
        // $("h1").text($("li").eq(1).text());

        var 列表數目 = $("li").length;
        var 隨機號碼 = Math.floor(Math.random()*列表數目);
        $("h1").text($("li").eq(隨機號碼).text());

        // 找到img元件
        // 設定img元件的src屬性 -> 對應元件的title值
        $("img").attr("src",$("li").eq(隨機號碼).attr("title"));
    });
});