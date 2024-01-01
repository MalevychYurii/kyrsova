document.addEventListener('DOMContentLoaded', function() {
    var previousModalSubmitButton = document.getElementById('previousModalSubmitButton');
    var newSubmitModal = document.getElementById('newSubmitModal');
    var newModalCloseButton = document.getElementById('newModalCloseButton');
    var goBackButton = document.getElementById('goBackButton');

    previousModalSubmitButton.addEventListener('click', function() {
        event.preventDefault();
        newSubmitModal.style.display = 'block';
    });

    newModalCloseButton.addEventListener('click', function() {
        newSubmitModal.style.display = 'none';
    });

    goBackButton.addEventListener('click', function() {
        newSubmitModal.style.display = 'none';
    });
});
