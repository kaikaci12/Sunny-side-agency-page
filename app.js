const burgerMeniu = document.querySelector(".burger-icon");
const navigation = document.querySelector("nav");
let toggle = false;
burgerMeniu.addEventListener("click", () => {
  navigation.classList.toggle("navigationActive");
  toggle = !toggle;
  if (toggle) {
    burgerMeniu.setAttribute("src", "./images/close.png");
  } else {
    burgerMeniu.setAttribute("src", "./images/icon-hamburger.svg");
  }
});
