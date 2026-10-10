
const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalId = null;


initilize()

function initilize () {

    if(slides.length > 0) {
        slides[slideindex].classList.add("displaySlide");
        intervalId = setInterval(goForward, 2000);
    }

}

function showslide(index) {

    if (index > slides.length) {
        slideindex = 0;
    } else if (index < 0) {
        slideindex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideindex].classList.add("displaySlide");
}

function goBack() {
    clearInterval(intervalId);
    slideindex--;
    showslide(slideindex)
}

function goForward() {
    slideindex += 1
    showslide(slideindex)
}