console.log("Hello world");

const nextSlide = document.querySelector(".arrow-forward");
const previousSlide = document.querySelector(".arrow-back");
const body = document.querySelector(".body");




let currentSlide = 1;

nextSlide.addEventListener('click', () => {
    currentSlide++;
    if(currentSlide == 5) {
        currentSlide = 1;
    }
    console.log(currentSlide);
    switchSlide(currentSlide);
});

previousSlide.addEventListener('click', () => {
    currentSlide--;
    if(currentSlide == 0) {
        currentSlide = 4;
    }
    switchSlide(currentSlide);
    console.log(currentSlide);

});






// Functions

function switchSlide(currentSlide) {
    switch (currentSlide) {
        case 1:
            body.style.backgroundImage = "url(img/gallery/bg-01.png";
            break;
        case 2:
            body.style.backgroundImage = "url(img/gallery/bg-02.png";
            break;
        case 3:
            body.style.backgroundImage = "url(img/gallery/bg-03.png";
        case 4:
            body.style.backgroundImage = "url(img/gallery/bg-04.png";
            break;        
    }
}