// VARIABLES
const selectedService = document.querySelector('.menu-selected');
const selectedServiceInput = document.querySelector('.menu-selected input');
const selectedServiceIcon = document.querySelector('.menu-selected i');
const servicesMenu = document.querySelector('.menu');
const services = document.querySelectorAll('.menu li');

let showServicesMenu = true;


// FUNCTIONS
const handleSelectedServiceClick = () => {
    servicesMenu.style.display = showServicesMenu ? 'flex' : 'none';
    selectedServiceIcon.style.transform = showServicesMenu ? 'rotate(180deg)' : 'rotate(0deg)';

    showServicesMenu = !showServicesMenu;
}

// sets the selected service to current service and vice versa 
// to allow user to re-select previously selected service
const setChosenService = (e) => {
    let currentService = selectedServiceInput.value;
    let chosenService = e.target.innerText;

    selectedServiceInput.value = chosenService;
    e.target.innerText = currentService;
}


// EVENT LISTENERS
selectedService.addEventListener('click', handleSelectedServiceClick);

if(services){
    for(let i = 0; i < services.length; i++){
        services[i].addEventListener('click', setChosenService);
    }
}