let currentScrollPosition = 0;
let scrollAmount = 400;
const  sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");


let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
 function scrollHorizontally(val){
     currentScrollPosition += (val * scrollAmount);
     sCont.style.left = currentScrollPosition + "px";
     if(currentScrollPosition >= 0){
          currentScrollPosition = 0
          
     }
     
     if(currentScrollPosition <= maxScroll){
         currentScrollPosition = maxScroll;
        
     }
     
     sCont.style.left=currentScrollPosition + "px"; 
 }
 function changeTheImage(){
const img=document.getElementById("profilePicture");
img.src=sessionStorage.getItem("imgs");
document.getElementById("name").innerText = sessionStorage.getItem("fname");
}
