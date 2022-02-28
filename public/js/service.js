setTimeout(() => {
    console.log()
    // TO REMOVE ON LOAD ANIMATIONS 2 SECONDS AFTER LOADING, TO ALLOW ON HOVER ANIMATIONS
    $(".service-info .links .number").removeAttr("id");
    $(".service-info .links .quote").removeAttr("id");
}, 2000);

// TO ADD ON HOVER ANIMATIONS TO CONTACT BUTTONS
setTimeout(() => {
    $(".service-info .links .number").addClass("links-hover-animation");
    $(".service-info .links .quote").addClass("links-hover-animation");
}, 2500);

// ADD IMAGE SLIDE IN ANIMATION ON ABOUT US IMAGE ON ABOUT US CONTAINER SCROLL
const aboutUsAnimationOnScroll = () => {
    if(isTablet()) return;

    if ($(window).scrollTop() > 1700) {
        $('.video').css("animation-name", "imageSlideInAnimation");
    }
}

//animation for services picture and video using gsap//
const service = document.getElementsByClassName("service-pic");
const video = document.getElementsByClassName("video");
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 800px)":function(){
        gsap.fromTo(".video", {
            scrollTrigger: {
                trigger:".video", // start the animation when ".box" enters the viewport (once)
                
            },
                x: -700,
            autoAlpha:0,
            
        },
        {
            scrollTrigger: {
                trigger:".video", // start the animation when ".box" enters the viewport (once)
                
            },
            x: 0,   
            autoAlpha: 1,
            
        }
    );
    
    TweenLite.fromTo(".service-pic", 1, {
            y: 300,
            autoAlpha:0,
            start: "top top",
            markers: true
            
        },
        {
            y: 0,   
            autoAlpha: 1,
            markers: true
            
        }
    );
    }

});

ScrollTrigger.matchMedia({
    "(max-width: 767px)":function(){
        gsap.fromTo(".video", {
            scrollTrigger: {
                trigger:".video", // start the animation when ".box" enters the viewport (once)
                
            },
                x: -700,
            autoAlpha:0,
            
        },
        {
            scrollTrigger: {
                trigger:".video", // start the animation when ".box" enters the viewport (once)
                
            },
            x: 0,   
            autoAlpha: 1,
            
        }
        
    );
        gsap.fromTo(".service-pic", {
            scrollTrigger: {
                trigger:".service-pic", // start the animation when ".box" enters the viewport (once)
            },
                y: 50,
            autoAlpha:0,
            
        },
        {
            scrollTrigger: {
                trigger:".service-pic", // start the animation when ".box" enters the viewport (once)
                
            },
            y: 0,   
            autoAlpha: 1,
            
        }
        
    );
        
    }

});

ScrollTrigger.matchMedia({
    "(max-width: 767px)":function(){
        
    }

});