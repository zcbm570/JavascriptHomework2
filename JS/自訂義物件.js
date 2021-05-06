let 測試 = new Object();
測試.姓名 = "疼";
測試.姓氏 = "微";
測試.年紀 = 50;
測試.顏色 = "紅色";
測試.微笑 = function() {
    document.write("^____^");
};

let 測試2 = {
    姓名 : "疼2",
    姓氏 : "微2",
    年紀 : 500,
    顏色 : "藍色",
    微笑:function() {
        document.write("-__-|||");
    }
}

function 測試3(姓名,姓氏,年紀,顏色) {
    this.姓名 = 姓名;
    this.姓氏 = 姓氏;
    this.年紀 = 年紀;
    this.顏色 = 顏色;
    this.微笑 = function() {
        document.write("😆😆"); //windows + . 表情符號
    };
};

let 測試結果 = new 測試3("微3","疼3","5000","白色");