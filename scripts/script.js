const hamburger = document.querySelector("header nav:first-of-type button img");
const overlayNav = document.querySelector("header nav:nth-of-type(2)");

const onzeMerken = document.querySelector(".openList");
const plusButton = document.querySelector(".merkenList button");
const plusImage = document.querySelector(".merkenList button img")

//  const heightUl = document.querySelector(".overlay-content");
//  let height = heightUl.offsetHeight;


let toggleList = true;
let toggleHamburger = true;

const openMenu = () => {
    overlayNav.classList.toggle('heightOverlay');
    if (toggleHamburger === true) {
        hamburger.src = "/images/icons/close.png"
    }else {
        hamburger.src = "/images/icons/hamburger.png";
    }
    toggleHamburger = !toggleHamburger;  
}

const openLi = () => {
    onzeMerken.classList.toggle('openLi');
    // changeimg hier triggeren
    // console.log(height);
}

// if plusbutton is clicked, trigger changeimg
const changeImg = () => {
    if (toggleList === true) {
        plusImage.src = "/images/icons/minus.png";
    } else {
        plusImage.src = "/images/icons/plus.png";
    }
    toggleList = !toggleList;
}
 
const openLiChangeImg = () => {
    changeImg();
    openLi();
}
hamburger.addEventListener("click", openMenu);
plusButton.addEventListener("click", openLiChangeImg);
