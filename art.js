/* 
 *  Project 4
 *  Name: Dharmi Patel
 *  Date: 2023-12-09
 *  Description: Project 4
**/

/* FOR INDEX PAGE HAMBURGER MENU */
let menu= document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})

/* for art section*/

document.addEventListener("DOMContentLoaded", load);

const imageWrapper = document.querySelector(".images");
const lightbox = document.querySelector(".lightbox");
const titleSpan = lightbox.querySelector(".title span");
const lightboxImg = lightbox.querySelector(".preview-img img");
const closeImgBtn = lightbox.querySelector(".close-icon");

function showLightbox(name, img){
    titleSpan.innerText = name;
    lightboxImg.src = img;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
};

function hideLightbox(){
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
};

function generateHTML(images) {
    images.forEach(img => {
        let li = document.createElement("li");
        li.classList.add("card");

        let image = document.createElement("img");
        image.src = img.url;
        image.alt = img.title;
        image.addEventListener("click", () => showLightbox(img.title, img.url));

        let detailsDiv = document.createElement("div");
        detailsDiv.classList.add("details");

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title");

        let icon = document.createElement("i");
        icon.classList.add("uil", "uil-camera");

        let span = document.createElement("span");
        span.textContent = img.title;

        titleDiv.appendChild(icon);
        titleDiv.appendChild(span);
        detailsDiv.appendChild(titleDiv);

        li.appendChild(image);
        li.appendChild(detailsDiv);

        imageWrapper.appendChild(li);
    });
};

function load() {
    fetch('art.json')
        .then(result => {
            return result.json()
        })
        .then(data => {
            generateHTML(data.images);
        });
}

closeImgBtn.addEventListener("click", hideLightbox);
