// VARIABLES
let isDown = false;
let startX;
let isScrolling;

const slider = document.querySelector('.images');
const imageContainers = [...document.querySelectorAll('.images > .image-container')];
const sliderButtonOne = document.querySelector('#car-one-button').children[0];
const sliderButtonTwo = document.querySelector('#car-two-button').children[0];
const sliderButtonThree = document.querySelector('#car-three-button').children[0];
const services = [...document.querySelectorAll('.services-images-overlay')];
const servicesNumberButton = document.querySelector('.services-buttons .number');
const servicesQuoteButton = document.querySelector('.services-buttons .quote');

// FUNCTIONS

// RETURNS WHETHER CURRENT SCREEN SIZE IS MOBILE SIZE OR NOT
// const isMobile = () => window.screen.width < 768? true : false;
// RETURNS WHETHER CURRENT SCREEN SIZE IS TABLET SIZE OR NOT
// const isTablet = () => window.screen.width >= 768 && window.screen.width <= 1200 ? true : false;

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

// SHOW / HIDE SLIDE INFO
const showSlideInfo = () => {
    $(".slider-info").show()
    $(".slider-info-border").show()
};
const hideSlideInfo = () => {
    $(".slider-info").hide()
    $(".slider-info-border").hide()
};

// THIS FUNCTIONS IS USED TO SNAP SCROLL TO A SPECIFIC SLIDE
// ACCORDING TO HOW MUCH THE SLIDER HAS BEEN SCROLLED
const scrollSnap = () => {
    if (isMobile() || isTablet()) return;

    let lengthScrolled = slider.scrollLeft;
    const imageWidth = $('.image-container').width();

    if (lengthScrolled < imageWidth / 2 && lengthScrolled < imageWidth) {
        $(slider).animate({ scrollLeft: 0 }); //SCROLL TO SLIDE ONE

        buttonOneSelected(); // SELECT SLIDER BUTTON ONE

        hideSlideInfo(); // HIDE SLIDER TEXT

        // AFTER 300 ms OF HIDING SLIDE TEXT SHOW TEXT WITH POP UP ANIMATION
        setTimeout(() => {
            showSlideInfo(); // SHOW SLIDER TEXT
            addPopUp(1); // TEXT POP UP ANIMATION
        }, 300);
    } else if (lengthScrolled > imageWidth / 2 && lengthScrolled < imageWidth * 1.5) {
        $(slider).animate({ scrollLeft: imageWidth }); //SCROLL TO SLIDE TWO

        buttonTwoSelected(); // SELECT SLIDER BUTTON TWO

        hideSlideInfo();

        setTimeout(() => {
            showSlideInfo();
            addPopUp(2);
        }, 300);
    } else if (lengthScrolled > imageWidth * 1.5) {
        $(slider).animate({ scrollLeft: imageWidth * 2 }); //SCROLL TO SLIDE THREE

        buttonThreeSelected(); // SELECT SLIDER BUTTON THREE

        hideSlideInfo();

        setTimeout(() => {
            showSlideInfo();
            addPopUp(3);
        }, 300);
    }

    // AFTER 150 ms OF REMOVING ZOOM ANIMATION ADD ZOOM IN ANIMATION AGAIN ON SCROLL SNAP
    removeZoom();
    setTimeout(() => addZoom(), 150); // IMAGE ZOOM-IN ANIMATION 
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
    const imageWidth = Math.ceil($('.image-container').width());
    const scrolled = Math.ceil(slider.scrollLeft);

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

// CREATING A SLIDESHOW WITH 8 SECONDS INTERVAL BETWEEN EACH SLIDE
let slideShowInterval = setInterval(slideShow, 8000);

// USED TO RESET SLIDESHOW ON MANUAL SCROLL
const resetSlideShowInterval = () => {
    clearInterval(slideShowInterval);
    slideShowInterval = setInterval(slideShow, 8000);
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

// THIS FUNCTION CHECKS IF SLIDER CONTAINER HAS BEEN SCROLLED OR SLIDES IN PLACE
const slidersInPlace = () => {
    const scrollPosition = Math.floor($(slider).scrollLeft());
    const imageWidth = Math.floor($('.image-container').width());
    
    if (scrollPosition === 0 || scrollPosition === imageWidth || scrollPosition === imageWidth * 2){
        return true;
    }
    return false;
}

// SAME AS scrollSnap BUT WITHOUT SNAP EFFECT
const mobileScroll = () => {
    if (!slidersInPlace()) return;

    let lengthScrolled = slider.scrollLeft;
    const imageWidth = $('.image-container').width();

    if (lengthScrolled < imageWidth / 2 && lengthScrolled < imageWidth) {
        buttonOneSelected();

        showSlideInfo();
        addPopUp(1);
    } else if (lengthScrolled > imageWidth / 2 && lengthScrolled < imageWidth * 1.5) {
        buttonTwoSelected();

        showSlideInfo();
        addPopUp(2);
    } else if (lengthScrolled > imageWidth * 1.5) {
        buttonThreeSelected();

        showSlideInfo();
        addPopUp(3);
    }

    // AFTER 150 ms OF REMOVING ZOOM ANIMATION ADD ZOOM IN ANIMATION AGAIN ON SCROLL SNAP
    removeZoom();
    setTimeout(() => addZoom(), 150); // IMAGE ZOOM-IN ANIMATION 
}

// SLIDER IMAGES FOR MOBILE AND DESKTOP SCREEN SIZE
const setMobileSliderImages = () => {
    document.querySelector('#car_1 img').src = "./public/images/mobile_mercedes.jpg";
    document.querySelector('#car_2 img').src = "./public/images/mobile_leather_repair.jpg";
    document.querySelector('#car_3 img').src = "./public/images/mobile_lambo.jpg";
}
const setSliderImages = () => {
    document.querySelector('#car_1 img').src = "./public/images/lambo.jpg";
    document.querySelector('#car_2 img').src = "./public/images/leather_repair.jpg";
    document.querySelector('#car_3 img').src = "./public/images/Ferrari.jpg";
}

// ADD IMAGE SLIDE IN ANIMATION ON ABOUT US IMAGE ON ABOUT US CONTAINER SCROLL
const aboutUsAnimationOnScroll = () => {
    if(isTablet()) return;

    if ($(window).scrollTop() > 150) {
        $('.about-us-image').css("animation-name", "imageSlideInAnimation");
    }
}

// this function adds animations to services images after scrolling 1265px, 
// services images are animated one by one with 500ms delay using setTimeout()
const servicesImagesAnimationOnScroll = () => {
    const scroll = $(window).scrollTop();

    if (isMobile()) {
        if (scroll > 1100) {
            servicesImagesAnimation();
            return;
        }
    }

    if (isTablet()) {
        if (scroll > 450) {
            servicesImagesAnimation();
            return;
        }
    }

    if (scroll > 1265) {
        servicesImagesAnimation();
    }
}

// this function adds animations to services buttons after scrolling 1700px, 
//then removes the animations 2 seconds later to add on hover animations
let firstScrollOnServices = true;
const servicesAnimationOnScroll = () => {
    const scroll = $(window).scrollTop();

    if (isMobile()) {
        if (scroll > 950) {
            servicesAnimation();
            return;
        }
    }

    if (isTablet()) {
        if (scroll > 775) {
            servicesAnimation();
            return;
        }
    }

    if (scroll > 1700) {
        servicesAnimation();
    }
}

const servicesImagesAnimation = () => {
    $(services[0]).addClass('services-images-overlay-animation');
    $(services[0].children[1]).addClass('services-images-animation');

    setTimeout(() => {
        $(services[1]).addClass('services-images-overlay-animation');
        $(services[1].children[1]).addClass('services-images-animation');
    }, 500);

    setTimeout(() => {
        $(services[2]).addClass('services-images-overlay-animation');
        $(services[2].children[1]).addClass('services-images-animation');
    }, 1000);

    setTimeout(() => {
        $(services[3]).addClass('services-images-overlay-animation');
        $(services[3].children[1]).addClass('services-images-animation');
    }, 1500);
}

const servicesAnimation = () => {
    if (firstScrollOnServices) {
        firstScrollOnServices = false;

        servicesNumberButton.setAttribute('id', 'leftToRight');
        servicesQuoteButton.setAttribute('id', 'topToBottom');

        setTimeout(() => {
            servicesNumberButton.removeAttribute('id');
            servicesQuoteButton.removeAttribute('id');
            servicesNumberButton.classList.add('links-hover-animation');
            servicesQuoteButton.classList.add('links-hover-animation');
        }, 2000);
    }
}

// EVENT LISTENERS

// ON LOAD IF MOBILE SCREEN SIZE THEN SET MOBILE SIZE SLIDER IMAGES
window.addEventListener('load', () => {
    if (isMobile()) {
        setMobileSliderImages();
    }
    if (isTablet()) {
        //if it's a tablet device, set about image animation on load instead of on scroll
        $('.about-us-image').css("animation-name", "imageSlideInAnimation");
    }
})

// functions called on window scroll
$(window).scroll(() => {
    aboutUsAnimationOnScroll();
    servicesAnimationOnScroll();
    servicesImagesAnimationOnScroll();
})

// DRAG SCROLL SLIDER CONTROLS
slider.addEventListener('mouseleave', () => {
    if (isMobile() || isTablet()) return;
    isDown = false
});

slider.addEventListener('mouseup', () => {
    if (isMobile() || isTablet()) return;

    isDown = false;

    if(slidersInPlace()) return; // IF SLIDER ISN'T SCROLLED EXIT 

    resetSlideShowInterval(); // RESET SLIDESHOW, TO AVOID AUTO-SCROLL AFTER USER ALREADY SCROLLING
    scrollSnap();
});

slider.addEventListener('mousedown', (e) => {
    if (isMobile() || isTablet()) return;
    isDown = true; // To disable snap effect and slideshow while slider is being scrolled or clicked

    scrollLeft = slider.scrollLeft;
    startX = e.pageX - scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
    if (isMobile() || isTablet()) return;

    if (!isDown) return;
    e.preventDefault();

    const walk = (e.pageX - scrollLeft - startX) * .765; //scroll-speed 
    //NOTE: INCREASING SPEED MORE MIGHT CAUSE THE SCROLL EFFECT TO GET STUCK ON REPEAT AND CRASH

    slider.scrollLeft = scrollLeft - walk;
});

// IF MOBILE OR TABLET USER, AFTER SCROLL RE-SELECT SLIDER BUTTON AND ANIMATIONS
slider.addEventListener('scroll', () => {
    if (!isMobile() && !isTablet()) return;

    hideSlideInfo();
    removeZoom();
    clearTimeout(isScrolling);
    
    isScrolling = setTimeout(() => {
        resetSlideShowInterval();
        mobileScroll();
    }, 120);
})