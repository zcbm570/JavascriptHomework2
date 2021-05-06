// 可以置換位置window.onload 當值以傳入onload
// window.onload = function() {
//     document.onclick = function(傳入值) { //傳入值e 當點擊時onclick
//         console.log(傳入值);
//         alert(傳入值.target.innerHTML + "有" + 傳入值.target.innerHTML.length + "個字元") //
//     }
// };

let confirmAnswer = confirm("你真的想吃腳皮嗎?");
console.log(confirmAnswer);
// let thisButton = document.getElementsByTagName("Button")[0];
let 腳皮 = document.getElementsByTagName("h1")[2]
// let 腳皮 = document.getElementsByTagNameNS("XXXXX")[0]
if(confirmAnswer) {
    腳皮.innerHTML = "腳皮給偉騰吃";
} else {
    腳皮.innerHTML = "腳皮還是給偉騰吃";
};