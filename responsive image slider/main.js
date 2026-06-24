const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime= 5000;
let slideInterval;

const nextSlide= () =>{
    // get current class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if(current.nextElementSibling){
        //add current to nect sibling
        current.nextElementSibling.classList.add('current');
    }
    else{
        //Add current to start
        slides[0].classList.add('current');
    }
}

const prevSlide= () =>{
   
    const current = document.querySelector('.current');
    
    current.classList.remove('current');
   
    if(current.previousElementSibling){
       
        current.previousElementSibling.classList.add('current');
    }
    else{
        // add current to last
        slides[slides.length-1].classList.add('current');
    }
}

next.addEventListener('click',(e)=>{
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide,intervalTime);
}
});
prev.addEventListener('click',(e)=>{
    prevSlide()
});


//auto slide
if(auto) {
    slideInterval = setInterval(nextSlide,intervalTime);
}