let 定時器物件 = document.getElementById("定時器")
let 輸入物件 = document.getElementById("輸入")
let 顯示物件 = document.getElementById("顯示")
let 按鍵物件 = document.getElementById("按鍵")
let 倒數時間數字 = 10;

定時器物件.innerHTML = 倒數時間數字;
按鍵物件.addEventListener("click",確認密碼)
let 剩餘時間物件 = setInterval(剩餘時間, 1000);

function 剩餘時間() {
    倒數時間數字--;
    定時器物件.innerHTML = 倒數時間數字;
    if ( 倒數時間數字 == 0) {
        顯示物件.innerHTML = "結束";
        clearInterval(剩餘時間物件);
    }
}

function 確認密碼() {
    顯示物件.innerHTML = "";
    if(parseInt(輸入物件.value)==1234) {
        alert("猜對惹");
        clearInterval(剩餘時間物件);
    } else {
        顯示物件.innerHTML = "在試一次"
    }
    輸入物件.value = null;
}