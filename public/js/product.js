// VARIABLES
const contactNumberButton = document.querySelector('.contact-buttons .number');
const contactQuoteButton = document.querySelector('.contact-buttons .quote');
const productsInfo = document.querySelectorAll('.product-information');


// FUNCTIONS

setTimeout(() => {
    // TO REMOVE ON LOAD ANIMATIONS 2 SECONDS AFTER LOADING, TO ALLOW ON HOVER ANIMATIONS
    $(".contact-buttons .number").removeAttr("id");
    $(".contact-buttons .quote").removeAttr("id");
}, 2000);

// TO ADD ON HOVER ANIMATIONS TO CONTACT BUTTONS
setTimeout(() => {
    $(".contact-buttons .number").addClass("links-hover-animation");
    $(".contact-buttons .quote").addClass("links-hover-animation");
}, 2500);

const scrollTopValue = () => $(window).scrollTop();

const screenWidth = () => window.screen.width;

const addFadeInAnimation = (container) => {
    $(container).css("animation-name", 'productImageFadeInAnimation');
}

const addSlideInFromRightAnimation = (container) => {
    $(container).css("animation-name", 'productInfoSlideInFromRightAnimation');
}
const addSlideInFromLeftAnimation = (container) => {
    $(container).css("animation-name", 'productInfoSlideInFromLeftAnimation');
}

//Function adding Image fade-in animation to each product
const addProductsImagesAnimations = () => {
    productTwoImageAnimation();
    productThreeImageAnimation();
    productFourImageAnimation();
    productFiveImageAnimation();
    productSixImageAnimation();
    productSevenImageAnimation();
}

//Functions adding Image fade-in animation to each product on scroll
const productTwoImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 55){
            addFadeInAnimation('.product-2 img');
            addSlideInFromRightAnimation(productsInfo[1].childNodes);
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > -1){
            addFadeInAnimation('.product-2 img')
            addSlideInFromRightAnimation(productsInfo[1].childNodes);
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > -1) {
            addFadeInAnimation('.product-2 img')
            addSlideInFromRightAnimation(productsInfo[1].childNodes);
        }
    }
    if (scrollTopValue() > 40) {
        addFadeInAnimation('.product-2 img');
        addSlideInFromRightAnimation(productsInfo[1].childNodes);
    }
}
const productThreeImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 450){
            addFadeInAnimation('.product-3 img');
            addSlideInFromLeftAnimation(productsInfo[2].childNodes);
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 300){
            addFadeInAnimation('.product-3 img')
            addSlideInFromLeftAnimation(productsInfo[2].childNodes);
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 275) {
            addFadeInAnimation('.product-3 img')
            addSlideInFromLeftAnimation(productsInfo[2].childNodes);
        }
    }
    if (scrollTopValue() > 370) {
        addFadeInAnimation('.product-3 img');
        addSlideInFromLeftAnimation(productsInfo[2].childNodes);
    }
}
const productFourImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 850){
            addFadeInAnimation('.product-4 img');
            addSlideInFromRightAnimation(productsInfo[3].childNodes);
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 730){
            addFadeInAnimation('.product-4 img')
            addSlideInFromRightAnimation(productsInfo[3].childNodes);
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 820 ){
            addFadeInAnimation('.product-4 img')
            addSlideInFromRightAnimation(productsInfo[3].childNodes);
        }
    }
    if (scrollTopValue() > 690) {
        addFadeInAnimation('.product-4 img');
        addSlideInFromRightAnimation(productsInfo[3].childNodes);
    }
}
const productFiveImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 1250){
            addFadeInAnimation('.product-5 img');
            addSlideInFromLeftAnimation(productsInfo[4].childNodes);
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 1170){
            addFadeInAnimation('.product-5 img')
            addSlideInFromLeftAnimation(productsInfo[4].childNodes);
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 1360) {
            addFadeInAnimation('.product-5 img')
            addSlideInFromLeftAnimation(productsInfo[4].childNodes);
        }
    }
    if (scrollTopValue() > 1030) {
        addFadeInAnimation('.product-5 img');
        addSlideInFromLeftAnimation(productsInfo[4].childNodes);
    }
}
const productSixImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 1650){
            addFadeInAnimation('.product-6 img');
            addSlideInFromRightAnimation(productsInfo[5].childNodes);
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 1600){
            addFadeInAnimation('.product-6 img')
            addSlideInFromRightAnimation(productsInfo[5].childNodes);
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 1900) {
            addFadeInAnimation('.product-6 img')
            addSlideInFromRightAnimation(productsInfo[5].childNodes);
        }
    }
    if (scrollTopValue() > 1330) {
        addFadeInAnimation('.product-6 img');
        addSlideInFromRightAnimation(productsInfo[5].childNodes);
    }
}
const productSevenImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 2050){
            addFadeInAnimation('.product-7 img');
            addSlideInFromLeftAnimation(productsInfo[6].childNodes);
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 2070){
            addFadeInAnimation('.product-7 img')
            addSlideInFromLeftAnimation(productsInfo[6].childNodes);
        }
    }
    if(screenWidth() < 1200){
        if(scrollTopValue() > 2450){
            addFadeInAnimation('.product-7 img')
            addSlideInFromLeftAnimation(productsInfo[6].childNodes);
        }
    }
    if (scrollTopValue() > 1670) {
        addFadeInAnimation('.product-7 img');
        addSlideInFromLeftAnimation(productsInfo[6].childNodes);
    }
}

// EVENT LISTENERS

window.onload = () => {
    addProductsImagesAnimations();
}
$(window).scroll(() => {
    addProductsImagesAnimations();
})