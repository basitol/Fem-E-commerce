const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const btnHamburger = document.querySelector(".hamburger");
const btnMenuClose = document.querySelector("#btnMenuClose");

const cart = document.querySelector(".cart");
const btnCart = document.querySelector(".btn-cart");

btnHamburger.addEventListener("click", onHamburgerClick);
btnMenuClose.addEventListener("click", onMenuClose);

function onHamburgerClick() {
  menu.classList.remove("hidden");
}

function onMenuClose() {
  menu.classList.add("hidden");
}

btnCart.addEventListener("click", openCart);

function openCart() {
  cart.classList.toggle("hidden");
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
