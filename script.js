let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")

let currentSlide = 0

function showSlide(index){
    slides.forEach(slide =>{
        slide.classList.remove("active");
    })
    dots.forEach(dot =>{
        dot.classList.remove("active");
    });
     
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide(){
    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    showSlide(currentSlide);
}
 setInterval(nextSlide,3000);

 console.log(slides);
 console.log(dots);
   
dots.forEach((dot,index) => {
    dot.addEventListener("click",() => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

