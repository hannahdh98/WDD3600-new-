const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

//mobile meny toggle function
function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

//call backdropClickHandler function
backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);
