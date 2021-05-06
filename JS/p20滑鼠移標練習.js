let 標題h1 = document.getElementsByTagName("h1")[0];
let 內文1 = document.getElementsByTagName("p")[0];
let 框架1 = document.getElementsByTagName("div")[0];
function 滑鼠在裡面() {
    標題h1.innerHTML = "HI";
    內文1.innerHTML = "";
}
function 滑鼠在外面() {
    標題h1.innerHTML = "Out";
    內文1.innerHTML = "";
}

function 滑鼠移動位置(e) {
    console.log(e);
    內文1.innerHTML = "位置 " + e.clientX +" , "+ e.clientY
}
框架1.addEventListener("mouseover",滑鼠在裡面);
框架1.addEventListener("mouseout",滑鼠在外面);
框架1.addEventListener("mousemove",滑鼠移動位置);
