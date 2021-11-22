// VARIABLES



// FUNCTIONS
const whoAreWeContainersAnimation = () => {
    if ($(window).scrollTop() > 100) {
        $('.who-are-we-1').css("animation-name", "aboutUsContainerOneAnimation");
        $('.who-are-we-2').css("animation-name", "aboutUsContainerTwoAnimation");
        $('.who-are-we-3').css("animation-name", "aboutUsContainerThreeAnimation");
        $('.who-are-we-4').css("animation-name", "aboutUsContainerFourAnimation");
        return;
    }
}

const partnersContainersAnimation = () => {
    if (isMobile()) {
        if ($(window).scrollTop() > 1225) {
            $('.partners-list .partner').css("animation-name", "partnersContainersAnimations");
        }
        return;
    }
    if (window.screen.width < 1000) {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 900) {
            $('.partners-list .partner').css("animation-name", "partnersContainersAnimations");
        }
        return;
    }
    if (window.screen.width < 1200) {
        if ($(window).scrollTop() > 950) {
            $('.partners-list .partner').css("animation-name", "partnersContainersAnimations");
        }
        return;
    }
    if (window.screen.width < 1400) {
        if ($(window).scrollTop() > 1150) {
            $('.partners-list .partner').css("animation-name", "partnersContainersAnimations");
        }
        return;
    }
    if ($(window).scrollTop() > 1200) {
        $('.partners-list .partner').css("animation-name", "partnersContainersAnimations");
    }
}

// EVENT LISTENERS
$(window).scroll(() => {
    whoAreWeContainersAnimation();
    partnersContainersAnimation();
    return;
})