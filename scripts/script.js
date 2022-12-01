let hamburger = document.querySelector("section:nth-of-type(1) img");
let overlayNav = document.querySelector(".overlay")

const openMenu = () => {
    overlayNav.classList.toggle('heightOverlay');
}

hamburger.addEventListener("click", openMenu);

console.log(overlayNav);


// /* Open */
// function openNav() {
//     document.getElementById("myNav").style.height = "100%";
//   }
  
//   /* Close */
//   function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
//   }

  