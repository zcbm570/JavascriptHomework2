var 主題 = [
    "巨球鳥",
    "巨球鳥1",
    "巨球鳥2",
    "巨球鳥3",
    "巨球鳥4",
    "巨球鳥5"
];

var 開始日期 = new Date();

function setMonthAndDay(開始月,開始日) {
    // 把日期變成JavaScript需要的日期時間格式
    // sartMonth 系統計算月份從0開始
    開始日期.setMonth(開始月-1,開始日);
    開始日期.setHours(0);
    開始日期.setMinutes(0);
    開始日期.setSeconds(0);
}

setMonthAndDay(2,21);

