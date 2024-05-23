// JavaScript file that implements functionality on charity_profile pages
// When clicking "Volunteer Now" button, user gets redirected to "Volunteer Now" page

// get button element by class name
const volunteerNowButton = document.getElementsByClassName('charity_profile_button');

// loop through each button element and add event listener
for (let i = 0; i < volunteerNowButton.length; i++) {
    volunteerNowButton[i].addEventListener('click', clickVolunteerNow);
}

// redirect user when clicking "Volunteer Now" button
function clickVolunteerNow(e) {
    location.href = "./volunteer_now.html"
}