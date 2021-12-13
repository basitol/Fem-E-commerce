const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const btnHamburger = document.querySelector(".hamburger");
const btnMenuClose = document.querySelector("#btnMenuClose");

const cart = document.querySelector(".cart");
const btnCart = document.querySelector(".btn-cart");

const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const productCounter = document.querySelector(".counter");

const gallery = document.querySelectorAll(".pic");
const heroImg = document.querySelector(".product-hero");

// Numerical value
let productCounterValue = 1;

btnHamburger.addEventListener("click", onHamburgerClick);
btnMenuClose.addEventListener("click", onMenuClose);

btnPlus.addEventListener("click", productPlus);
btnMinus.addEventListener("click", productMinus);

gallery.forEach((img) => {
  img.addEventListener("click", onThumbClick);
});

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

function productPlus() {
  // console.log(productCounterValue);
  setProductCounter(1);
}

function productMinus() {
  setProductCounter(-1);
}

function setProductCounter(value) {
  if (productCounterValue + value > 0) {
    productCounterValue += value;
    productCounter.innerHTML = productCounterValue;
  }
  // console.log(value);
}

function onThumbClick(event) {
  gallery.forEach((img) => {
    img.classList.remove("active");
  });

  event.target.parentElement.classList.add("active");

  //update hero img
  heroImg.src = event.target.src.replace("-thumnail", "");
}
