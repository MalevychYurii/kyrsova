document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.nav');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  mobileMenuButton.addEventListener('click', function () {
    nav.classList.toggle('active');
    // Toggle the visibility of menu and close icons
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });
});
