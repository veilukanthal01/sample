window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navigate");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function changeColorFunction() {
    let i;
    let collection = document.getElementsByClassName("add_to_cart_button");
    for (i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = rgb(250, 234, 230);
    }
}