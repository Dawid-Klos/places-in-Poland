console.log("Hello world");

// SLIDER //

// Control //
const nextSlide = document.querySelector(".arrow-forward");
const previousSlide = document.querySelector(".arrow-back");
const body = document.querySelector(".body");

// Position points //
const pos1 = document.querySelector(".pos-1");
const pos2 = document.querySelector(".pos-2");
const pos3 = document.querySelector(".pos-3");
const pos4 = document.querySelector(".pos-4");

// Position points - text //
const posText1 = document.querySelector(".pos-1__text");
const posText2 = document.querySelector(".pos-2__text");
const posText3 = document.querySelector(".pos-3__text");
const posText4 = document.querySelector(".pos-4__text");

// Place descripton //
const placeHeading = document.querySelector(".place__heading");
const placeHeadingNumber = document.querySelector(".place__number");
const placeContent = document.querySelector(".place__content");

// SLIDES //

// container 
const slide1 = document.querySelector(".slide-01");
const slide2 = document.querySelector(".slide-02");
const slide3 = document.querySelector(".slide-03");
const slide4 = document.querySelector(".slide-04");
// icon
const slideIcon1 = document.querySelector(".slide-01__icon");
const slideIcon2 = document.querySelector(".slide-02__icon");
const slideIcon3 = document.querySelector(".slide-03__icon");
const slideIcon4 = document.querySelector(".slide-04__icon");
// heading
const slideText1 = document.querySelector(".slide-01__heading");
const slideText2 = document.querySelector(".slide-02__heading");
const slideText3 = document.querySelector(".slide-03__heading");
const slideText4 = document.querySelector(".slide-04__heading");

// Default values //
let currentSlide = 1;
pos1.classList.add("pos-active");
posText1.classList.add("pos-text-active");


// SLIDER CONTROL - changing slides //
nextSlide.addEventListener('click', () => {
    currentSlide++;
    if(currentSlide == 5) {
        currentSlide = 1;
    }
    switchSlide(currentSlide);
});

previousSlide.addEventListener('click', () => {
    currentSlide--;
    if(currentSlide == 0) {
        currentSlide = 4;
    }
    switchSlide(currentSlide);
});


// Functions //

function switchSlide(currentSlide) {
    switch (currentSlide) {
        case 1:
            // bg //
            body.style.backgroundImage = "url('img/gallery/bg-01.png')";
            // current slide position //
            pos4.classList.remove("pos-active");
            pos3.classList.remove("pos-active");
            pos2.classList.remove("pos-active");
            pos1.classList.add("pos-active");
            // current slide position - text styling //
            posText2.classList.remove("pos-text-active");
            posText3.classList.remove("pos-text-active");
            posText4.classList.remove("pos-text-active");
            posText1.classList.add("pos-text-active");
            // current place descripton
            placeHeadingNumber.textContent = "01.";
            placeHeading.textContent = "Baltic Sea";
            placeContent.textContent = "The Baltic Sea is an arm of the Atlantic Ocean, enclosed by Denmark, Estonia, Finland, Latvia, Lithuania, Sweden, northeast Germany, Poland, Russia and the North and Central European Plain.";
            // slide mini-picture changing //
            slide1.style.backgroundImage = "url('img/gallery/small/slide-01.png')";
            slide2.style.backgroundImage = "url('img/gallery/small/slide-02.png')";
            slide3.style.backgroundImage = "url('img/gallery/small/slide-03.png')";
            slide4.style.backgroundImage = "url('img/gallery/small/slide-04.png')";
            // slide icon changing //
            slideIcon1.src = "img/sailing-icon.svg";
            slideIcon2.src = "img/hiking-icon.svg";
            slideIcon3.src = "img/kayaking-icon.svg";
            slideIcon4.src = "img/bike.svg";
            // slide heading changing //
            slideText1.innerHTML = "Baltic Sea";
            slideText2.innerHTML = "Mountains";
            slideText3.innerHTML = "Masuria";
            slideText4.innerHTML = "Kashubia";
            break;
        case 2:
            // bg //
            body.style.backgroundImage = "url('img/gallery/bg-02.png')";
            // current slide position //
            pos4.classList.remove("pos-active");
            pos3.classList.remove("pos-active");
            pos1.classList.remove("pos-active");
            pos2.classList.add("pos-active");
            // current slide position - text styling //
            posText2.classList.add("pos-text-active");
            posText3.classList.remove("pos-text-active");
            posText4.classList.remove("pos-text-active");
            posText1.classList.remove("pos-text-active");
            // current place descripton
            placeHeadingNumber.textContent = "02.";
            placeHeading.textContent = "Mountains";
            placeContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
            // slide mini-picture changing //
            slide4.style.backgroundImage = "url('img/gallery/small/slide-01.png')";
            slide1.style.backgroundImage = "url('img/gallery/small/slide-02.png')";
            slide2.style.backgroundImage = "url('img/gallery/small/slide-03.png')";
            slide3.style.backgroundImage = "url('img/gallery/small/slide-04.png')";
            // slide icon changing //
            slideIcon4.src = "img/sailing-icon.svg";
            slideIcon1.src = "img/hiking-icon.svg";
            slideIcon2.src = "img/kayaking-icon.svg";
            slideIcon3.src = "img/bike.svg";
             // slide heading changing //
             slideText4.innerHTML = "Baltic Sea";
             slideText1.innerHTML = "Mountains";
             slideText2.innerHTML = "Masuria";
             slideText3.innerHTML = "Kashubia";
            break;
        case 3:
            // bg //
            body.style.backgroundImage = "url('img/gallery/bg-03.png')";
            // current slide position //
            pos4.classList.remove("pos-active");
            pos2.classList.remove("pos-active");
            pos1.classList.remove("pos-active");
            pos3.classList.add("pos-active");
            // current slide position - text styling //
            posText2.classList.remove("pos-text-active");
            posText3.classList.add("pos-text-active");
            posText4.classList.remove("pos-text-active");
            posText1.classList.remove("pos-text-active");
            // current place descripton
            placeHeadingNumber.textContent = "03.";
            placeHeading.textContent = "Masuria";
            placeContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
            // slide mini-picture changing //
            slide3.style.backgroundImage = "url('img/gallery/small/slide-01.png')";
            slide4.style.backgroundImage = "url('img/gallery/small/slide-02.png')";
            slide1.style.backgroundImage = "url('img/gallery/small/slide-03.png')";
            slide2.style.backgroundImage = "url('img/gallery/small/slide-04.png')";
            // slide icon changing //
            slideIcon3.src = "img/sailing-icon.svg";
            slideIcon4.src = "img/hiking-icon.svg";
            slideIcon1.src = "img/kayaking-icon.svg";
            slideIcon2.src = "img/bike.svg";
            // slide heading changing //
            slideText3.innerHTML = "Baltic Sea";
            slideText4.innerHTML = "Mountains";
            slideText1.innerHTML = "Masuria";
            slideText2.innerHTML = "Kashubia";
            break;
        case 4:
            // bg //
            body.style.backgroundImage = "url('img/gallery/bg-04.png')";
            // current slide position //
            pos3.classList.remove("pos-active");
            pos2.classList.remove("pos-active");
            pos1.classList.remove("pos-active");
            pos4.classList.add("pos-active");
            // current slide position - text styling //
            posText2.classList.remove("pos-text-active");
            posText3.classList.remove("pos-text-active");
            posText4.classList.add("pos-text-active");
            posText1.classList.remove("pos-text-active");
            // current place descripton
            placeHeadingNumber.textContent = "04.";
            placeHeading.textContent = "Kashubia";
            placeContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
             // slide mini-picture changing //
             slide2.style.backgroundImage = "url('img/gallery/small/slide-01.png')";
             slide3.style.backgroundImage = "url('img/gallery/small/slide-02.png')";
             slide4.style.backgroundImage = "url('img/gallery/small/slide-03.png')";
             slide1.style.backgroundImage = "url('img/gallery/small/slide-04.png')";
            // slide icon changing //
            slideIcon2.src = "img/sailing-icon.svg";
            slideIcon3.src = "img/hiking-icon.svg";
            slideIcon4.src = "img/kayaking-icon.svg";
            slideIcon1.src = "img/bike.svg";
            // slide heading changing //
            slideText2.innerHTML = "Baltic Sea";
            slideText3.innerHTML = "Mountains";
            slideText4.innerHTML = "Masuria";
            slideText1.innerHTML = "Kashubia";
            break;        
    }
}