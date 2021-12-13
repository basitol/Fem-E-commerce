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

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".previous");

// Numerical value
let productCounterValue = 1;

btnHamburger.addEventListener("click", onHamburgerClick);
btnMenuClose.addEventListener("click", onMenuClose);

btnPlus.addEventListener("click", productPlus);
btnMinus.addEventListener("click", productMinus);

gallery.forEach((img) => {
  img.addEventListener("click", onThumbClick);
});

btnNext.addEventListener("click", handleBtnClickNext);
btnPrev.addEventListener("click", handleBtnClickPrev);

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

function handleBtnClickNext() {
  let imageIndex = getCurrentImageIndex();
  imageIndex++;

  if (imageIndex > 4) {
    imageIndex = 1;
  }
  setHeroImage(imageIndex);
}

function handleBtnClickPrev() {
  let imageIndex = getCurrentImageIndex();
  imageIndex--;

  if (imageIndex < 1) {
    imageIndex = 4;
  }
  setHeroImage(imageIndex);
}

function getCurrentImageIndex() {
  const imageIndex = parseInt(
    heroImg.src
      .split("\\")
      .pop()
      .split("/")
      .pop()
      .replace(".jpg", "")
      .replace("image-product-", "")
  );
  return imageIndex;
  // console.log(imageIndex);
}

function setHeroImage(imageIndex) {
  heroImg.src = `./img/image-product-${imageIndex}.jpg`;

  gallery.forEach((img) => {
    img.classList.remove("active");
  });

  gallery[imageIndex - 1].classList.add("active");
}
