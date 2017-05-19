var menuButton = document.querySelector('.js-btn-menu');

function toggleVisibility() {
    var dropDownMenu = document.querySelector('.nav-dropdown-menu');
    if (dropDownMenu.style.display === 'none') {
        dropDownMenu.style.display = 'block';
    } else {
        dropDownMenu.style.display = 'none';
    }
}

menuButton.addEventListener('click', toggleVisibility);
