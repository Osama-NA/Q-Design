// VARIABLES
let isDown = false;
let startX;

const slider = document.querySelector('.images');
const imageContainers = [...document.querySelectorAll('.images > .image-container')];
const sliderButtonOne = document.querySelector('#car-one-button').children[0];
const sliderButtonTwo = document.querySelector('#car-two-button').children[0];
const sliderButtonThree = document.querySelector('#car-three-button').children[0];
const clickableContainer = document.querySelectorAll('.clickable-container');

// FUNCTIONS

setTimeout(() => {
    // TO REMOVE ON LOAD ANIMATIONS 2 SECONDS AFTER LOADING, TO ALLOW ON HOVER ANIMATIONS
    $(".links .number").removeAttr("id");
    $(".links .quote").removeAttr("id");

    // TO REMOVE TEXT POP UP ON LOAD ANIMATION 2 SECONDS AFTER LOADING, FOR ANIMATION RESET AFTER SNAP SCROLL
    removePopUp(); 
}, 2000);

// TO ADD ON HOVER ANIMATIONS
setTimeout(() => {
    $(".links .number").addClass("links-hover-animation");
    $(".links .quote").addClass("links-hover-animation");
}, 2500);

// GIVES A SLOW ZOOM IN ANIMATION FOR SLIDER IMAGES
const addZoom = () => {
    imageContainers.map(container => {
        container.children[0].classList.add("zoom-animation");
    })
}
const removeZoom = () => {
    imageContainers.map(container => {
        container.children[0].classList.remove("zoom-animation");
    })
}

// GIVES A POP UP ANIMATION FOR SLIDER INFO TEXT
const addPopUp = (i) => {
    $(`.slide-info-${i}`).css("animation-name", "sliderInfoAnimation");
    $(`.slide-info-${i} .slider-info-border`).css("animation-name", "sliderInfoBorderAnimation");
}

const removePopUp = () => {
    $(".slider-info").css("animation-name", "none");
    $(".slider-info-border").css("animation-name", "none");
}

// THIS FUNCTIONS IS USED TO SNAP SCROLL TO A SPECIFIC SLIDE 
// ACCORDING TO HOW MUCH THE SLIDER HAS BEEN SCROLLED
const scrollSnap = () => {
    let lengthScrolled = slider.scrollLeft;
    const imageWidth = $('.image-container').width();

    if (lengthScrolled < imageWidth / 2 && lengthScrolled < imageWidth) {
        $(slider).animate({ scrollLeft: 0 });
        addPopUp(1); // TEXT POP UP ANIMATION
    } else if (lengthScrolled > imageWidth / 2 && lengthScrolled < imageWidth * 1.5) {
        $(slider).animate({ scrollLeft: imageWidth });
        addPopUp(2); // TEXT POP UP ANIMATION
    } else if (lengthScrolled > imageWidth * 1.5) {
        $(slider).animate({ scrollLeft: imageWidth * 2 });
        addPopUp(3); // TEXT POP UP ANIMATION
    }
}

// THIS SLIDESHOW FUNCTION RUNS EVERY 10 SECONDS INTERVAL 
// FIRST CURRENT SLIDE SHOW INDEX IS RETURNED USING getSlideShowIndex()
// THEN ACCORDING TO THE CURRENT SLIDE WE SCROLL TO NEXT SLIDE USING IMAGE WIDTH
// SCROLL TO SLIDE ONE: scroll= 0
// SCROLL TO SLIDE TWO: scroll= IMAGE WIDTH
// SCROLL TO SLIDE THREE: scroll= IMAGE WIDTH * 2
const slideShow = () => {
    if (isDown) return; // If slider being clicked or dragged stop slideshow

    let slideShowIndex = getSlideShowIndex();
    if (slideShowIndex < 0) return; // if no index returned, then exit function. 

    // to re-use animation
    removeZoom();
    removePopUp();

    const scroll = $('.image-container').width(); // image width

    switch (slideShowIndex) {
        case 0:
            slideOne(scroll)
            break;
        case 1:
            slideTwo(scroll * 2)
            break;
        case 2:
            slideThree(0)
            break;
    }
}

// THESE BUTTONS SCROLLS TO THE GIVEN SLIDE
// BUTTON OF GIVEN SLIDE IS SELECTED AND ZOOM ANIMATION IS ADDED
const slideOne = (scroll) => {
    $(slider).animate({ scrollLeft: scroll });
    buttonTwoSelected();
    addZoom();
    addPopUp(2);
}
const slideTwo = (scroll) => {
    $(slider).animate({ scrollLeft: scroll });
    buttonThreeSelected();
    addZoom();
    addPopUp(3);
}
const slideThree = (scroll) => {
    $(slider).animate({ scrollLeft: scroll });
    buttonOneSelected();
    addZoom();
    addPopUp(1);
}

// This function checks slider's scrollLeft and returns 'current-slide' index accordingly
const getSlideShowIndex = () => {
    const imageWidth = $('.image-container').width();
    const scrolled = slider.scrollLeft;

    switch (scrolled) {
        case 0:
            return 0;
        case imageWidth:
            return 1;
        case (imageWidth * 2):
            return 2;
        default:
            return -1;
    }
}

let slideShowInterval = setInterval(slideShow, 3000);
const resetSlideShowInterval = () => {
    clearInterval(slideShowInterval);
    slideShowInterval = setInterval(slideShow, 3000);
}

// GIVES FULL OPACITY TO BUTTON OF CURRENT SLIDE AND REDUCES THE OPACITY OF SIBLINGS
const buttonOneSelected = () => {
    $(sliderButtonOne).css("opacity", 1);
    $(sliderButtonTwo).css("opacity", .4);
    $(sliderButtonThree).css("opacity", .4);
}
const buttonTwoSelected = () => {
    $(sliderButtonOne).css("opacity", .4);
    $(sliderButtonTwo).css("opacity", 1);
    $(sliderButtonThree).css("opacity", .4);
}
const buttonThreeSelected = () => {
    $(sliderButtonOne).css("opacity", .4);
    $(sliderButtonTwo).css("opacity", .4);
    $(sliderButtonThree).css("opacity", 1);
}

// EVENT LISTENERS

// DRAG SCROLL SLIDER CONTROLS

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    removeZoom(); // REMOVE IMAGE ZOOM-IN ANIMATION 
    scrollSnap();
    resetSlideShowInterval(); // RESET SLIDESHOW, TO AVOID AUTO-SCROLL AFTER USER ALREADY SCROLLING
    setTimeout(() => addZoom(), 150); // IMAGE ZOOM-IN ANIMATION 
});

slider.addEventListener('mousedown', (e) => {
    isDown = true; // To disable snap effect and slideshow while slider is being scrolled or clicked
    scrollLeft = slider.scrollLeft;
    startX = e.pageX - scrollLeft;
    removePopUp();
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();

    const walk = (e.pageX - scrollLeft - startX) * .75; //scroll-speed 
    //NOTE: INCREASING SPEED MORE MIGHT CAUSE THE SCROLL EFFECT TO GET STUCK ON REPEAT AND CRASH

    slider.scrollLeft = scrollLeft - walk;
});

// 'MOUSE DOWN' EVENT ON IMAGE CONTAINERS
imageContainers[0].addEventListener('mousedown', () => buttonOneSelected());
imageContainers[1].addEventListener('mousedown', () => buttonTwoSelected());
imageContainers[2].addEventListener('mousedown', () => buttonThreeSelected());

// 'MOUSE MOVE' EVENT ON IMAGE CONTAINERS
imageContainers[0].addEventListener('mousemove', () => buttonOneSelected());
imageContainers[1].addEventListener('mousemove', () => buttonTwoSelected());
imageContainers[2].addEventListener('mousemove', () => buttonThreeSelected());