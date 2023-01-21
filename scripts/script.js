// Header nav links
const hamburgerButton = document.querySelector("header nav:nth-of-type(1) button");
const hamburgerMenu = document.querySelector("header nav:nth-of-type(2)");
// tweede dropdown in de nav
const plusButtons = document.querySelectorAll("header nav:nth-of-type(2) > ul > li button");
const scrollButton = document.querySelector("section:nth-of-type(3) button");

//image slider
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

function toggleHamburgerMenu() {
    hamburgerMenu.classList.toggle('open');
    hamburgerButton.classList.toggle('open'); 
}

// anders werkt this niet :-(
function toggleSubMenu() {
    const dePlusButton = this;
    const hetSubMenu =  dePlusButton.nextElementSibling;

    dePlusButton.classList.toggle('open');
    hetSubMenu.classList.toggle('open');
}

function topScroll() {
    document.body.scrollTop = 0; //safari
    document.documentElement.scrollTop = 0; //chrome, firefox etc
}

scrollButton.addEventListener("click", topScroll);
hamburgerButton.addEventListener("click", toggleHamburgerMenu);

plusButtons.forEach(plusButton => {
    plusButton.addEventListener("click", toggleSubMenu);
});


