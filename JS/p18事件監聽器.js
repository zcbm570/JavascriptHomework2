function showAlert() {
    標題1.innerHTML = "Hello";
}
let 按鍵 = document.getElementsByTagName("button")[0];
let 標題1 = document.getElementsByTagName("h1")[0];

按鍵.addEventListener("click",showAlert);