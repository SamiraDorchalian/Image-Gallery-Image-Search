let productImg = document.getElementById("product-img");
//span
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "./images/images__1_-removebg-preview (1).png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productImg.src = "./images/images__2_-removebg-preview.png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    productImg.src = "./images/images-removebg-preview.png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
