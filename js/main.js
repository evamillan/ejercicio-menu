var menuButton = document.querySelector('.js-btn-menu');

function toggleVisibility() {
    var dropDownMenu = document.querySelector('.nav-dropdown-menu');
    if (dropDownMenu.classList.contains('hidden')) {
        dropDownMenu.classList.remove('hidden');
    } else {
        dropDownMenu.classList.add('hidden');
    }
}

menuButton.addEventListener('click', toggleVisibility);
