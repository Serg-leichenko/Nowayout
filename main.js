let hamburger = document.getElementById("topNavHamburger");
let nav = document.getElementById("topNavMenu");

hamburger.onclick = function () {
  nav.style.display = "block";
};

window.onclick = function (event) {
  if (!event.target.matches("#topNavHamburger")) {
    nav.style.display = "none";
  }
};
