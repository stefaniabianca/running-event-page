// --- Make header sticky on scroll ----
const header = document.querySelector(".header");

// Add stickyHeader class to header on scroll position. Remove the class if user didnt scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("stickyHeader")
    } else {
        header.classList.remove("stickyHeader")
    }
})

// --- Registration form displays on button click ---
//Get elements
const registrationBtn = document.querySelector(".registrationButton");
const footerBtn = document.querySelector(".footerBtn");
const closeFormBtn = document.querySelector(".close-btn");

const registrationPopup = document.querySelector(".popup");
const overlay = document.querySelector("#overlay");

registrationBtn.addEventListener("click", () => {
    showPopup();
    activeOverlay();
})

footerBtn.addEventListener("click", () => {
    showPopup();
    activeOverlay();
})

closeFormBtn.addEventListener("click", () => {
    registrationPopup.style.display = "none";
    overlay.style.display = "none";
})

function showPopup() {
    registrationPopup.style.display = "block";
}

function activeOverlay() {
    overlay.style.display = "block";
    // overlay.classList.add("active-overlay");
}



// --- Countdown ----
const eventDate = new Date("11/25/2023 09:00:00").getTime();
let timeInterval;

const second = 1000;
const minute = second * 60; 
const hour = minute * 60; 
const day = hour * 24;

// Get elements
const daysElm = document.getElementById("days");
const hoursElm = document.getElementById("hours");
const minutesElm = document.getElementById("minutes");
const secondsElm = document.getElementById("seconds");


function countDown() {
    const currentDate = new Date().getTime();
    const timeSpan = eventDate - currentDate;

    if (timeSpan <= 0) {
        clearInterval(timeInterval);
    }

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    daysElm.innerHTML = days;
    hoursElm.innerHTML = hours;
    minutesElm.innerHTML = minutes;
    secondsElm.innerHTML = seconds;
}

timeInterval = setInterval(countDown, second);


//Show race map on click
const showMapButtons = document.querySelectorAll(".showMapBtn");
const raceMap = document.querySelector(".raceMap");

const mapImages = [
    './images/10KM-Map.png',
    './images/21KM-Map.png',
    './images/42KM-Map.png',
]

showMapButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        raceMap.src = mapImages[index];
        raceMap.style.display = "block";  
    })
})



// Make FAQs answer show when question is clicked
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})


// Social media buttons functionality
const instagramBtn = document.querySelector(".fa-instagram");
const facebookBtn = document.querySelector(".fa-facebook-f");
const tiktokBtn = document.querySelector(".fa-tiktok");
const stravaBtn = document.querySelector(".fa-strava");

instagramBtn.addEventListener("click", () => {
    window.open("https://www.instagram.com/");
})

facebookBtn.addEventListener("click", () => {
    window.open("https://www.facebook.com/");
})

tiktokBtn.addEventListener("click", () => {
    window.open("https://www.tiktok.com/en/");
})

stravaBtn.addEventListener("click", () => {
    window.open("https://www.strava.com/");
})


const contactBtn = document.querySelector(".contactUs");
contactBtn.addEventListener("click", () => {
    window.open("mailto:hello@enchantedrun.com");
})