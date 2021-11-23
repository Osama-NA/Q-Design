// VARIABLES


// FUNCTIONS

const scrollTopValue = () => $(window).scrollTop();

const screenWidth = () => window.screen.width;

const addFadeInAnimation = (container) => {
    $(container).css("animation-name", 'productImageFadeInAnimation');
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
    console.log($(window).scrollTop());
    if(isMobile()) {
        if(scrollTopValue() > 55){
            addFadeInAnimation('.product-2 img');
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > -1){
            addFadeInAnimation('.product-2 img')
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > -1) {
            addFadeInAnimation('.product-2 img')
        }
    }
    if (scrollTopValue() > 40) {
        addFadeInAnimation('.product-2 img');
    }
}
const productThreeImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 450){
            addFadeInAnimation('.product-3 img');
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 300){
            addFadeInAnimation('.product-3 img')
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 275) {
            addFadeInAnimation('.product-3 img')
        }
    }
    if (scrollTopValue() > 370) {
        addFadeInAnimation('.product-3 img');
    }
}
const productFourImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 850){
            addFadeInAnimation('.product-4 img');
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 730){
            addFadeInAnimation('.product-4 img')
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 820 ){
            addFadeInAnimation('.product-4 img')
        }
    }
    if (scrollTopValue() > 690) {
        addFadeInAnimation('.product-4 img');
    }
}
const productFiveImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 1250){
            addFadeInAnimation('.product-5 img');
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 1170){
            addFadeInAnimation('.product-5 img')
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 1360) {
            addFadeInAnimation('.product-5 img')
        }
    }
    if (scrollTopValue() > 1030) {
        console.log($(window).scrollTop());
        addFadeInAnimation('.product-5 img');
    }
}
const productSixImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 1650){
            addFadeInAnimation('.product-6 img');
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 1600){
            addFadeInAnimation('.product-6 img')
        }
    }
    if (screenWidth() < 1200) {
        if (scrollTopValue() > 1900) {
            addFadeInAnimation('.product-6 img')
        }
    }
    if (scrollTopValue() > 1330) {
        addFadeInAnimation('.product-6 img');
    }
}
const productSevenImageAnimation = () => {
    if(isMobile()) {
        if(scrollTopValue() > 2050){
            addFadeInAnimation('.product-7 img');
        }
    }
    if(screenWidth() < 1000){
        if(scrollTopValue() > 2070){
            addFadeInAnimation('.product-7 img')
        }
    }
    if(screenWidth() < 1200){
        if(scrollTopValue() > 2450){
            addFadeInAnimation('.product-7 img')
        }
    }
    if (scrollTopValue() > 1670) {
        addFadeInAnimation('.product-7 img');
    }
}

// EVENT LISTENERS

window.onload = () => {
    addProductsImagesAnimations();
}
$(window).scroll(() => {
    addProductsImagesAnimations();
})