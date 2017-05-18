var menuButton = document.querySelector('.js-btn-menu');
var dropDownMenu = document.querySelector('.nav-dropdown-menu');
var menuVisibility = document.querySelector('.nav-dropdown-menu').getAttribute('display');

function toggleVisibility() {
  if (menuVisibility = "none") {
    dropDownMenu.style.display = "block";
    menuVisibility = "block";
  }
  else if (menuVisibility = "block") {
    dropDownMenu.style.display = "none";
    console.log("prueba");
  }
}

menuButton.addEventListener('click', toggleVisibility);
