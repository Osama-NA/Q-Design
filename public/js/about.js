// VARIABLES
const contactNumberButton = document.querySelector('.contact-buttons .number');
const contactQuoteButton = document.querySelector('.contact-buttons .quote');

const className = '.who-are-we';
const container = 'aboutUsContainer';

let firstScrollOnContact = true;


// FUNCTIONS

const scrollTopValue = () => $(window).scrollTop();

const screenWidth = () => window.screen.width;

const addPartnersContainerAnimation = () => {
    $('.partners-list .partner').css("animation-name", "partnersContainersAnimations");
}

//Adds animation to the 'who are we' containers on scroll
const whoAreWeContainersAnimation = () => {
    if (scrollTopValue() > 100) {
        $(`${className}-1`).css("animation-name", `${container}OneAnimation`);
        $(`${className}-2`).css("animation-name", `${container}TwoAnimation`);
        $(`${className}-3`).css("animation-name", `${container}ThreeAnimation`);
        $(`${className}-4`).css("animation-name", `${container}FourAnimation`);
    }
}

//Adds animation to partners containers on scroll according to the screen's width
const partnersContainersAnimation = () => {
    if (isMobile()) {
        if (scrollTopValue() > 1225) {
            addPartnersContainerAnimation();
        }
    }
    if (screenWidth() < 1000) {
        if (scrollTopValue() > 900) {
            addPartnersContainerAnimation();
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 950) {
            addPartnersContainerAnimation();
        }
    }
    if (screenWidth() < 1400) {
        if (scrollTopValue() > 1150) {
            addPartnersContainerAnimation();
        }
    }
    if (scrollTopValue() > 1200) {
            addPartnersContainerAnimation();
    }
}

// this function adds animations to the contact buttons after scrolling, 
// then removes the animations 2 seconds later to add on hover animations
const contactButtonsAnimationOnScroll = () => {
    if (isMobile() || isTablet()) {
        if (scrollTopValue() > -1) {
            contactButtonsAnimation();
            return;
        }
    }
    if (scrollTopValue() > 25) {
        contactButtonsAnimation();
    }
}
const contactButtonsAnimation = () => {
    if (firstScrollOnContact) {
        firstScrollOnContact = false;
        
        contactNumberButton.setAttribute('id', 'leftToRight');
        contactQuoteButton.setAttribute('id', 'topToBottom');

        setTimeout(() => {
            contactNumberButton.removeAttribute('id');
            contactQuoteButton.removeAttribute('id');
            contactNumberButton.classList.add('links-hover-animation');
            contactQuoteButton.classList.add('links-hover-animation');
        }, 2000);
    }
}

// EVENT LISTENERS
$(window).scroll(() => {
    whoAreWeContainersAnimation();
    partnersContainersAnimation();
    contactButtonsAnimationOnScroll();
})
window.onload = () => {
    contactButtonsAnimationOnScroll();
}