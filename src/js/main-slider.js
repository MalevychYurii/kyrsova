document.addEventListener('DOMContentLoaded', function () {
    const images = [
        './src/images/main-page-image.png',
        './src/images/about-img-1.jpg',
    ];

    let currentImageIdx = 0;

    function updateSliderImage() {
        const imageElement = document.querySelector('.main-page__picture-container .main-page__image');
        if (imageElement) {
            imageElement.src = images[currentImageIdx];
        }
        // Оновлення номеру слайду
        const slideNumberElement = document.querySelector('.main-page__slide-numbers_left');
        if (slideNumberElement) {
            slideNumberElement.textContent = String(currentImageIdx + 1).padStart(2, '0');
        }
    }

    function nextImage() {
        currentImageIdx = (currentImageIdx + 1) % images.length;
        updateSliderImage();
    }

    function previousImage() {
        currentImageIdx = (currentImageIdx - 1 + images.length) % images.length;
        updateSliderImage();
    }

    const nextButton = document.querySelector('.next-button'); 
    const prevButton = document.querySelector('.prev-button');

    if (nextButton) {
        nextButton.addEventListener('click', function (event) {
            event.preventDefault();
            nextImage();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', function (event) {
            event.preventDefault();
            previousImage();
        });
    }

    updateSliderImage();
});
