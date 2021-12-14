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

const btnAddToCart = document.querySelector(".btn");
const cartCount = document.querySelector(".cart-count");

const productInShoppingCart = document.querySelector(".cart__product");

const msgEmpty = document.querySelector(".msg-empty");
const checkOut = document.querySelector(".checkout");

// Numerical value
let productCounterValue = 1;
let productInCart = 0;
let price = 250.0;
let discount = 0.5;
let newPrice = price * discount;

btnHamburger.addEventListener("click", onHamburgerClick);
btnMenuClose.addEventListener("click", onMenuClose);

btnPlus.addEventListener("click", productPlus);
btnMinus.addEventListener("click", productMinus);

gallery.forEach((img) => {
  img.addEventListener("click", onThumbClick);
});

btnNext.addEventListener("click", handleBtnClickNext);
btnPrev.addEventListener("click", handleBtnClickPrev);

btnAddToCart.addEventListener("click", addToCart);

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

function addToCart() {
  productInCart += productCounterValue;

  const productHTMLElement = `
  <div class="item">
    <img class="product-img" src="./img/image-product-1-thumbnail.jpg" alt="product 1 thumb">
    <div class="details">
      <div class="product-name">
        Autumn Limited Edition...
      </div>
      <div class="price-grp">
        <div class="price">$${newPrice.toFixed(2)}</div> x
        <div class="count">${productInCart}</div>
        <div class="total-amount">$${(newPrice * productInCart).toFixed(
          2
        )}</div>
      </div>
    </div>
    <img id="btnDelete" src="./img/icon-delete.svg" alt="icon delete">
  </div>`;

  productInShoppingCart.innerHTML = productHTMLElement;

  updateCart();

  const btnDelete = document.querySelector("#btnDelete");
  btnDelete.addEventListener("click", deleteCartItem);

  // console.log(productInCart);
}

function updateCart() {
  updateCartIcon();
  updateMsgEmpty();
  updateCheckoutButton();
}

function updateCartIcon() {
  cartCount.textContent = productInCart;

  if (productInCart == 0) {
    if (!cartCount.classList.contains("hidden")) {
      cartCount.classList.add("hidden");
    }
  } else {
    cartCount.classList.remove("hidden");
  }
}

function updateMsgEmpty() {
  if (productInCart == 0) {
    if (msgEmpty.classList.contains("hidden")) {
      msgEmpty.classList.remove("hidden");
    }
  } else {
    if (!msgEmpty.classList.contains("hidden")) {
      msgEmpty.classList.add("hidden");
    }
  }
}

function updateCheckoutButton() {
  if (productInCart == 0) {
    if (!checkOut.classList.contains("hidden")) {
      checkOut.classList.add("hidden");
    }
  } else {
    checkOut.classList.remove("hidden");
  }
}

function deleteCartItem() {
  // console.log("deleted");
  productInCart--;
  updateCart();

  const el = document.querySelector(".count");
  const totalAmount = document.querySelector(".total-amount");
  el.innerHTML = productInCart;
  totalAmount.innerHTML = `$${(newPrice * productInCart).toFixed(2)}`;

  if (productInCart == 0) {
    productInShoppingCart.innerHTML = "";
  }
}

// cartCount.innerHTML = 1;
// cartCount.textContent = 2;
