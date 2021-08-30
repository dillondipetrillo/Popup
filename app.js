// Variable declarations
const openPopupButton = document.querySelector('.click-me');
const closePopupButton = document.querySelector('.close');
const confirmClose = document.querySelector('.confirm .close');
const popUp = document.querySelector('.pop-up');
const confirmPopup = document.querySelector('.confirm');
const form = document.querySelector('.cta-form form');
const emailInput = document.querySelector('.cta-form form input');
const shop = document.querySelector('.confirm-button button');
const overlay = document.querySelector('.overlay');

// Opens popup when Click Me button is clicked
openPopupButton.addEventListener('click', () => {
    if(!popUp.classList.contains('active') && !overlay.classList.contains('active')) {
        popUp.classList.add('active');
        overlay.classList.add('active');
    }
});

closePopupButton.addEventListener('click', closePopup); //Close popup when 'X' clicked
confirmClose.addEventListener('click', closePopup); //Close Confirm when 'X' click
shop.addEventListener('click', closePopup); //Close Confirm when 'Go Shop!' button is clicked
overlay.addEventListener('click', closePopup); //Close popup and/or confirm when overlay is clicked

// Check if email is valid email format and return true if it is
function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

// Remove active class from popup and/or confirm if they already contain active
function closePopup() {
    if(popUp.classList.contains('active') || confirmPopup.classList.contains('active') && overlay.classList.contains('active')) {
        popUp.classList.remove('active');
        confirmPopup.classList.remove('active');
        overlay.classList.remove('active');
    }
}

function submitForm(e) {
    e.preventDefault();
    if(!validateEmail(emailInput.value)) { //Check if email input is valid email
        alert('Enter valid email');
    }
    if(emailInput.value !== '' && validateEmail(emailInput.value)) { //Check if email input is not empty & valid
        if(popUp.classList.contains('active')) {
            popUp.classList.remove('active');
            confirmPopup.classList.add('active');
            form.reset(); //Reset form input field
        }
    }
}

// Calls submitForm() on form submit
form.addEventListener('submit', submitForm);

