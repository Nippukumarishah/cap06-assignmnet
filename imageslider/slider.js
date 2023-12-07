let imageGalllery = document.getElementById('image-slider');
let img =document.querySelectorAll('img');
let stop = document.querySelector('.red');
let clr = null;

function startBtn(){
    imageGalllery.style.scrollBehavior = "smooth";
    let slideIndex = 0;
    function show(){
        let clean = setInterval(show,2500);
        for(let i = 0; i < img.length; i++){
            img[i].style.display = "none";
        }
        slideIndex++;
        if(slideIndex > img.length-1){
            slideIndex = 1;
        }
        img[slideIndex - 1].style.display = "block";
    }
    show()
    
    stop.innerText = "Stop";
    if(stop.innerText = "Stop"){
        stop.addEventListener("click",()=>{
            clearInterval(clr);
            stop.innerText = "Start";
            window.location.reload()
        });
    }


}


function backBtn(){
    clearInterval(clr);
    clr = null;
    imageGalllery.style.scrollBehavior = "smooth"
    imageGalllery.scrollLeft-=700
}
function nextBtn(){
    clearInterval(clr);
    clr = null;
    imageGalllery.style.scrollBehavior = "smooth"
    imageGalllery.scrollLeft+=700
}