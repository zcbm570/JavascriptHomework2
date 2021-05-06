$(function () {
    $("#排列欄位").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var 主題數目 = 主題.length;

        //一秒鐘有1000毫秒,每分鐘60秒,每小時60分鐘,每天24小時
    var 每天毫秒 = 24*60*60*1000;

    for (var x = 0; x < 主題數目; x++) {
        $("#排列欄位").append("<tr>");
        // $("#時間表").append("<td>" + (x + 1) + "</td>"); //這是原本要寫的呈現感覺

        //你用typeof()包住整個全部 會發現他是字串String 接下來就是找字串物件底下的屬性跟方法去處理
        $("#排列欄位").append(`<td>${x + 1}</td>`);
        $("#排列欄位").append(`<td>${new Date(開始日期.getTime()+7*x*每天毫秒).toLocaleDateString().slice(5)}</td>`);
        $("#排列欄位").append(`<td>${主題[x]}</td>`);

        $("#排列欄位").append("</tr>");
    }


});