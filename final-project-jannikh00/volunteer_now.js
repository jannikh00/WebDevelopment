// JavaScript file that implements functionality on volunteer_now page
// When clicking "Submit" button, user gets alert with success message

// get button elements by class name
const submitButtons = document.getElementsByClassName('submit_button');

// loop through each button element and add event listener
for (let i = 0; i < submitButtons.length; i++) {
    submitButtons[i].addEventListener('click', clickSubmit);
}

// giving alert with success message when clicking "Submit" button
function clickSubmit(e) {
    alert("Information successfully submitted! Thank you very much for reaching out!");
}