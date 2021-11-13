const imageBox=document.getElementById("boxImages");
const imageArr=document.querySelectorAll(".Images");
const buttonRight=document.getElementById("arrowRight");
const buttonLeft=document.getElementById("arrowLeft");


const maxLeft=imageBox.scrollWidth-imageBox.clientWidth;

let autoPlay = setInterval( move , 50 );

buttonRight.addEventListener("click",()=>{
    imageBox.scrollLeft +=150;
})

buttonLeft.addEventListener("click",()=>{
    imageBox.scrollLeft -=150;
})

imageArr.forEach(function(item){
    item.addEventListener("mouseover",function(){
        clearInterval(autoPlay);
    })
    item.addEventListener("mouseleave",function(){
        autoPlay = setInterval( move , 50 );
    })
    
})


function move(){
    if(imageBox.scrollLeft>maxLeft-1){
        imageBox.scrollLeft -= maxLeft;
    }else{
        imageBox.scrollLeft+=1;
    }
}



