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

//TODO - reader.readAsDataURL(file);
//REVIEW - event.dataTransfer.files The const files = event.dataTransfer.files statement is used to get the files that were dragged and dropped onto an element. 
// The event object is the event object that is passed to the event handler. 
// The dataTransfer property of the event object contains the data that was dragged and dropped. 
// The files property of the dataTransfer object contains an array of file objects. The file objects contain information about the files that were dragged and dropped,
// such as the name, size, and type of the files.

//REVIEW - file.type.startsWith('image/')The startsWith() method is used to check if a string starts with another string.
// The startsWith() method is used to check if a string starts with another string.

//REVIEW - const reader = new FileReader(); The const reader = new FileReader() statement is used to create a new FileReader object. The FileReader object is used to read the contents of files. The new FileReader() constructor takes no arguments.
// The FileReader object has a number of methods that can be used to read the contents of files, including:
// readAsArrayBuffer(): Reads the contents of the file as an array of bytes.
// readAsDataURL(): Reads the contents of the file as a data URL.
// readAsText(): Reads the contents of the file as a text string.
// The FileReader object also has a number of events that can be used to track the progress of the reading operation, including:
// onload: Fired when the reading operation is complete.
// onerror: Fired when an error occurs during the reading operation.

//REVIEW - reader.onload onload: Fired when the reading operation is complete.

//REVIEW - reader.readAsDataURL(file); readAsDataURL(): Reads the contents of the file as a data URL.

images.forEach((img) => {
    img.addEventListener("dragover", (evt) => {
        evt.preventDefault();
    })

    img.addEventListener("drop", (evt) => {
        evt.preventDefault();
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    img.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
    })
})

const changeScrollColor = (element, color) => {
    element.style.backgroundColor = color
}

destinations.forEach((dest) => {
    dest.addEventListener("wheel", (evt) => {
        changeScrollColor(dest, "yellow")
    })
})

