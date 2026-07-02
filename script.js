const navbar = document.querySelector(".navbar");
const heroLogo = document.querySelector(".logo");
const bottle = document.querySelector(".bottle");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    if (y > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    if (y > 120) {

        heroLogo.classList.add("shrink");
        bottle.classList.add("zoom");

    } else {

        heroLogo.classList.remove("shrink");
        bottle.classList.remove("zoom");

    }

});