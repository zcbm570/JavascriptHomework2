let aa的回應 = prompt("aa");
let 誰 = document.getElementById("回應");

switch (aa的回應) {
    case "AA":
        誰.innerHTML = "AA誰?";
        break;
    case "BB":
        誰.innerHTML = "正確";
        break;
    default:
        誰.innerHTML = "錯誤";
}