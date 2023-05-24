var slides=document.querySelectorAll(".slide");
var currentSlide=0;

function showSlide(index){
    slides.forEach(function(slide){
        slide.style.display="none";
    });
    slides[index].style.display="block";
}

function nextSlide(){
    currentSlide=(currentSlide+1)%slides.length;
    showSlide(currentSlide);
}
function previousSlide(){
    currentSlide=(currentSlide-1+slides.length)%slides.length;
    showSlide(currentSlide);
}
document.getElementById("nextButton").addEventListener("click", nextSlide);
document.getElementById("previousButton").addEventListener("click", previousSlide);

showSlide(currentSlide);