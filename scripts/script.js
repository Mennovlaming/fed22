const hamburgerButton = document.querySelector("header nav:nth-of-type(1) button");
const hamburgerMenu = document.querySelector("header nav:nth-of-type(2)");
const plusButtons = document.querySelectorAll("header nav:nth-of-type(2) > ul > li button");


const toggleHamburgerMenu = () => {
    hamburgerMenu.classList.toggle('open');
    hamburgerButton.classList.toggle('open'); 
}

// anders werkt this niet :-(
const toggleSubMenu = () => {
    const dePlusButton = this;
    const hetSubMenu =  dePlusButton.nextElementSibling;

    dePlusButton.classList.toggle('open');
    hetSubMenu.classList.toggle('open');
}


hamburgerButton.addEventListener("click", toggleHamburgerMenu);

plusButtons.forEach(plusButton => {
    plusButton.addEventListener("click", toggleSubMenu);
});

