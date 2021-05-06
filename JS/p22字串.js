let 標題h1 = document.getElementsByTagName("h1")[0];

標題h1.addEventListener("click",showAlert);

function showAlert() {
    // alert(標題h1.innerHTML.indexof("World"));
    // alert(typeof(標題h1.innerHTML.split(" ")[0]));
    alert (標題h1.innerHTML.split(" ")[0]);

}