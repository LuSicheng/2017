var canvas = document.body;
var maxWidth = canvas.clientWidth;
var maxHeight = canvas.clientHeight;
var piece = new Array(50);

for (var i = 0; i < piece.length; i++) {
    piece[i]= document.createElement("div");
    piece[i].style.color = "#fff";
    piece[i].innerHTML = "*";
    piece[i].style.position = "absolute";
    piece[i].style.left = Math.ceil(Math.random() * maxWidth) + "px";
    piece[i].style.top = Math.random() *maxHeight + "px";
    piece[i].style.fontSize=Math.ceil(Math.random()*20) +15+"pt";
    piece[i].style.weight="bold";
    canvas.appendChild(piece[i]);
}
setInterval(function () {
    for (var i = 0; i < piece.length; i++) {
        if (parseInt(piece[i].style.top) < maxHeight-100) {
            piece[i].style.top = parseFloat(piece[i].style.top) + Math.random()*3 + "px";
            piece[i].style.left=Math.min(Math.max(0,parseFloat(piece[i].style.left)+Math.random()*3-1.5),maxWidth) + "px";
        } else {
            piece[i].style.left = Math.random() * maxWidth + "px";
            piece[i].style.top = 0 + "px";
        }
    }
}, 10);