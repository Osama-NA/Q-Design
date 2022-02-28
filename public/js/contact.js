// VARIABLES
const selectedService = document.querySelector('.menu-selected');
const selectedServiceInput = document.querySelector('.menu-selected input');
const selectedServiceIcon = document.querySelector('.menu-selected i');
const servicesMenu = document.querySelector('.menu');
const services = document.querySelectorAll('.menu li');
const contactForm = document.querySelector('.form-container form');

// EmailJs ID's
const serviceID = 'service_pm957rh';
const templateID = 'template_qqjh6vu';
const userID = 'user_I78m0ESdzgYh9SrO25MbQ';

let showServicesMenu = true;


// FUNCTIONS
const handleSelectedServiceClick = () => {
    servicesMenu.style.display = showServicesMenu ? 'flex' : 'none';
    selectedServiceIcon.style.transform = showServicesMenu ? 'rotate(180deg)' : 'rotate(0deg)';

    showServicesMenu = !showServicesMenu;
}

const addPopUp = (i) => {
    $(`.contact-us-info-${i}`).css("animation-name", "sliderInfoAnimation");
    $(`.slide-info-${i} .slider-info-border`).css("animation-name", "sliderInfoBorderAnimation");
}

// sets the selected service to current service and vice versa 
// to allow user to re-select previously selected service
// handleSelectedServiceClick is called to close menu after a service is selected
const setChosenService = (e) => {
    let currentService = selectedServiceInput.value;
    let chosenService = e.target.innerText;

    selectedServiceInput.value = chosenService;
    e.target.innerText = currentService;

    handleSelectedServiceClick();
}

const handleContactFormSubmit = (e) => {
    e.preventDefault();
    
    const message = e.target.message.value;

    if (!isMessageValid(message))
        return;

    sendEmail();

    e.target.reset();
}

const sendEmail = () => {
    emailjs.sendForm(
        serviceID,
        templateID,
        contactForm,
        userID
    ).then(() => {
        alert('Email successfully sent.');
    }, (error) => {
        alert(error.text);
    });
}

// used to not allow useless messages
const isMessageValid = (message) => {
    if (message.length < 15) {
        alert('Please tell us more details.');
        return false;
    }
    return true;
}


// EVENT LISTENERS
selectedService.addEventListener('click', handleSelectedServiceClick);

if(services){
    for(let i = 0; i < services.length; i++){
        services[i].addEventListener('click', setChosenService);
    }
}

contactForm.addEventListener('submit', handleContactFormSubmit);

