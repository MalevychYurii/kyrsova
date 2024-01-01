document.addEventListener('DOMContentLoaded', function() {
  var modal = document.querySelector('.modal');
  var modalBackdrop = document.getElementById('modalBackdrop');
  var openModalButton = document.getElementById('openModalButton');
  var closeModalButton = document.querySelector('[data-modal-close]');

    openModalButton.addEventListener('click', function() {
        event.preventDefault();
        modal.style.display = 'block';
        modalBackdrop.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
        modalBackdrop.style.display = 'none';
    });

  openModalButton.addEventListener('click', openModal);

  closeModalButton.addEventListener('click', closeModal);
});