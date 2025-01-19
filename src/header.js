const burgerMenu = document.querySelector('.burger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});
