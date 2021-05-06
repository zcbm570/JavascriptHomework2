// let 標題物件1 = document.getElementsByTagName("h1")[0];
// 標題物件1.style.color = "red";
// 標題物件1.style.background = "black";
// 標題物件1.style.border = "10cm";
// 標題物件1.style.borderColor = "blue";ㄋ

let 指定物件 = document.getElementById("指定");
let 名字物件 = document.getElementsByName("名字");
let 內文物件 = document.getElementsByTagName("p")[0];

console.log(名字物件[1].innerHTML);
console.log(名字物件[1].firstChild.nodeValue);