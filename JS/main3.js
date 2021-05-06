// 函數呼叫 p.14
function showAlert() {
    標題1.innerHTML = "Hello";
}
let 按鍵 = document.getElementsByTagName("button")[0];
let 標題1 = document.getElementsByTagName("h1")[0];

// 按鍵.onclick = function() {
//     showAlert();
//     // 可以跟上述替換  標題1.innerHTML = "Hello";
// };
// 按鍵.onclick = showAlert; // 可以跟上次替換

// 迴圈 p.15
// 按鍵.onclick = function () {
//     for (let i=0;i<10;i++) {
//         if (i==3) {
//             break;
//         };
//         console.log(i);
//     };
// };

按鍵.onclick = function () {
    let person = {
        firstName:"偉",
        lastName:"騰",
        height:100
    };
    for(x in person) {
        // console.log(person[x]);
        console.log(x+":"+person[x]);
    };
    // for(x in window) {
    //     // console.log(person[x]);
    //     console.log(x+":"+person[x]);
    // };
};
