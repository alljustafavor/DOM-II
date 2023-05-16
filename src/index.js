import './less/index.less'

// Your code goes here!
const signUpBtn = Array.from(document.querySelectorAll(".btn"));
const navLinks = document.querySelectorAll("a");
const images = Array.from(document.images);
const webpageText = Array.from(document.querySelectorAll("h1, a, h2, p, h3, h4"));
const copyright = document.querySelector(".footer");
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

const wheelForFontSize = (element, fontSize) => {
    element.style.fontSize = fontSize;
}

webpageText.forEach((text) => {
    text.addEventListener("wheel", (evt) => {
        wheelForFontSize(text, "35px")
    })
})

const loadEvent = (element, color) => {
    element.style.backgroundColor = color;
}

window.addEventListener("load", (evt) => {
    loadEvent(copyright, "yellow");
});

const logoClickEvt = (element, font) => {
    element.style.font = font;
}

window.addEventListener("click", (evt) => {
    logoClickEvt(logo, "italic bold 20px arial,serif");
})

const changeImgSize = (element, amount) => {
    element.style.height = `${element.offsetWidth + amount}px`;
    element.style.width = `${element.offsetHeight + amount}px`
};

window.addEventListener("keydown", (evt) => {
    if(evt.key === "ArrowUp") {
        images.forEach((img) => {
            changeImgSize(img, 10);
        });
    } else if(evt.key === "ArrowDown") {
        images.forEach((img) => {
            changeImgSize(img, -10)
        })
    }
})