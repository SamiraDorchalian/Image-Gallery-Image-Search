const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgEl = document.querySelectorAll("img");

let currentImg = 1;
let timeOut;

nextEl.addEventListener("click", ()=>{
    currentImg++;
    clearTimeout(timeOut);
    updataImg();
});

prevEl.addEventListener("click", ()=>{
    currentImg--;
    clearTimeout(timeOut);
    updataImg();
});

function updataImg(){
    if(currentImg > imgEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg =imgEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeOut = setTimeout(() => {
        currentImg++;
        updataImg();
    }, 3000)
}
updataImg();