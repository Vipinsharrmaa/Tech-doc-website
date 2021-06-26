// Hamburger open menu
const body = document.querySelector("body")
const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".navbar__toggle");
const nav = document.querySelector(".nav")

toggle.addEventListener("click", function toggleclick() {
    // Close
    if (navbar.classList.contains("open")) {
        body.classList.remove("noscroll"); 
        navbar.classList.remove("open");
        nav.classList.add("hide-for-mobile");


    } else { //Open
        body.classList.add("noscroll"); 
        navbar.classList.add("open");
        nav.classList.remove("hide-for-mobile");
        nav.addEventListener("click", () => { 
            nav.classList.add("hide-for-mobile"); 
            body.classList.remove("noscroll"); 
            navbar.classList.remove("open")
        } );
    }
})