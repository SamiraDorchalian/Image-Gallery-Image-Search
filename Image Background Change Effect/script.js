var ImgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originallImg = document.getElementById("originallImg");
var line = document.getElementById("line");

originallImg.style.width = ImgBox.offsetWidth + "px";


var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}