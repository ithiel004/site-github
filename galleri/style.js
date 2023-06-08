let overlay = document.querySelector(".overlay");
let burger = document.querySelector(".navbar-toggler");

burger.addEventListener("click", function () {
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
});
