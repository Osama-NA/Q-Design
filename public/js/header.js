// VARIABLES
let isMenuOpened = false;
let isServicesMenuOpened = false;

const menuButton = document.querySelector('.mobile-menu-button');
const servicesMenuButton = document.querySelector('.services-button i');
const nav = document.querySelector('.pages-nav');


// FUNCTIONS

const isMobile = () => window.screen.width < 768 ? true : false;
const isTablet = () => window.screen.width >= 768 && window.screen.width <= 1200 ? true : false;

setTimeout(() => {
    // TO REMOVE ON LOAD ANIMATIONS 2 SECONDS AFTER LOADING, TO ALLOW ON CLICK ANIMATIONS
    $(menuButton).css("animation-name", "none");
}, 2000);

const addOpenButtonAnimation = () => {
    $('.dash1').css("animation-name", "dashOneOpenAnimation");
    $('.dash2').css("animation-name", "dashTwoOpenAnimation");
    $('.dash3').css("animation-name", "dashThreeOpenAnimation");
    isMenuOpened = true;
}
const closeOpenButtonAnimation = () => {
    $('.dash1').css("animation-name", "dashOneCloseAnimation");
    $('.dash2').css("animation-name", "dashTwoCloseAnimation");
    $('.dash3').css("animation-name", "dashThreeCloseAnimation");
    isMenuOpened = false;
}

const openMenu = () => {
    $('.pages-nav .links').css("display", "flex");
    $(`.pages-nav .links`).css("animation-name", "openMenuAnimation");
}
const closeMenu = () => {
    $(`.pages-nav .links`).css("animation-name", "closeMenuAnimation");
}

const openServicesMenu = () => {
    $(".below-services").css("margin-top", "29.4rem");
    $(".services ul").css("display", "flex");
    $(servicesMenuButton).css("transform", "rotateZ(0deg)");
    isServicesMenuOpened = true;
}
const closeServicesMenu = () => {
    $(".below-services").css("margin-top", "0");
    $(".services ul").css("display", "none");
    $(servicesMenuButton).css("transform", "rotateZ(90deg)");
    isServicesMenuOpened = false;
}

// AFTER 75px SCROLL GIVE NAV BAR BACKGROUND COLOR
const setNavBackground = () => {
    if (isMobile()) return;

    if ($(window).scrollTop() > 75) {
        $(nav).css("background-color", "#202020")
    } else {
        $(nav).css("background-color", "transparent");
    }
}

// EVENT LISTENERS

// functions called on window scroll
$(window).scroll(() => {
    setNavBackground();
})

// ANIMATE MENU BUTTON THEN SHOW MENU
// ANIMATE MENU BUTTON THEN HIDE MENU
menuButton.addEventListener('click', () => {
    if (!isMenuOpened) {
        addOpenButtonAnimation();
        openMenu();
    } else {
        closeOpenButtonAnimation();
        closeMenu();
    }
})

// SHOW / HIDE SERVICES DROP DOWN MENU
servicesMenuButton.parentElement.addEventListener('click', () => {
    //Mobile
    if (isMobile()) {
        if (!isServicesMenuOpened) {
            openServicesMenu();
        } else {
            closeServicesMenu();
        }
    }

    //Tablet 
    if (isTablet()) {
        if (!isServicesMenuOpened) {
            $('.services ul').show();
            isServicesMenuOpened = true;
        } else {
            $('.services ul').hide();
            isServicesMenuOpened = false;
        }
    }
})