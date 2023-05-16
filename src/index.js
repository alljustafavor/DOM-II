import './less/index.less'

// Your code goes here!
const signUpBtn = Array.from(document.querySelectorAll(".btn"));
const navLinks = document.querySelectorAll("a");
const images = Array.from(document.images);
const webpageText = Array.from(document.querySelectorAll("h1, a, h2, p, h3, h4"));
const copyright = document.querySelector(".footer p");
const destinations = Array.from(document.querySelectorAll(".destination"));
const mainContent = document.querySelector(".home");
const logo = document.querySelector(".logo-heading");


const mouseoverEvt = (element, color1, color2) => {
    element.style.color = color1;
    element.style.background = color2;
}

const navLinksArr = Array.from(navLinks);

navLinksArr.forEach((link) => {
    link.addEventListener("mouseover", (evt) => {
        mouseoverEvt(link, "yellow", "black");
    })
    link.addEventListener("mouseout", (evt) => {
        mouseoverEvt(link, "black", "white");
    })
})


