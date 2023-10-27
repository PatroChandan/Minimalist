const header = document.querySelector("header");
const card1 = document.getElementById("card-btn1");
const card2 = document.getElementById("card-btn2");
const popup = document.getElementById("popup");
const closePop = document.getElementById("closePop");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scroll > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("bx-x");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

card1.addEventListener("click", () => {
  popup.style.display = "flex";
});
card2.addEventListener("click", () => {
  popup.style.display = "flex";
});
popup.style.display = "none";

closePop.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    popup.style.display = "none";
  }
});
