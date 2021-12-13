const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const btnHamburger = document.querySelector(".hamburger");
const btnMenuClose = document.querySelector("#btnMenuClose");
const slideElems = document.querySelectorAll(".has-slide");

btnHamburger.addEventListener("click", onHamburgerClick);
btnMenuClose.addEventListener("click", onMenuClose);

function onHamburgerClick() {
  menu.classList.remove("hidden");
}

function onMenuClose() {
  menu.classList.add("hidden");
}

// btnHamburger.addEventListener("click", function () {
//   console.log("click hamburger");

//   if (header.classList.contains("open")) {
//     console.log("open");
//     header.classList.remove("open");
//     slideElems.forEach(function (element) {
//       element.classList.toggle("slide-in");
//       element.classList.add("slide-out");
//     });
//   } else {
//     console.log("close");
//     header.classList.add("open");
//     slideElems.forEach(function (element) {
//       element.classList.remove("slide-out");
//       element.classList.add("slide-in");
//     });
//   }
// });
