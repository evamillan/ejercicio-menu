'use strict';

var menuButton = document.querySelector('.js-btn-menu');

function toggleVisibility() {
  var dropDownMenu = document.querySelector('.nav-dropdown-menu');
  dropDownMenu.classList.toggle('hidden');
}

menuButton.addEventListener('click', toggleVisibility);
