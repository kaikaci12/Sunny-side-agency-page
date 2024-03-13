const burgerMeniu = document.querySelector(".burger-icon");
const navigation = document.querySelector("nav");
let navActive = false;
burgerMeniu.addEventListener("click", () => {
  if (!navActive) {
    navigation.classList.add("navigationActive");
    navActive = true;
  } else {
    navigation.classList.remove("navigationActive");
    navActive = false;
  }
});
