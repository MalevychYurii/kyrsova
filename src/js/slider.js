document.addEventListener('DOMContentLoaded', (event) => {
  const slides = document.querySelectorAll('.main-gallery__palette img');
  const slideNumbersLeft = document.querySelector('.slide-numbers__left');
  const slideNumbersRight = document.querySelector('.slide-numbers__right');
  const nextButton = document.querySelector('.panel__list .list__item.next a');
  const prevButton = document.querySelector('.panel__list .list__item.prev a');
  let currentGroup = 0;
  let totalSlides;
  let slidesPerPage;

  // Function to update the number of slides based on screen size
  function updateSlidesPerPage() {
    if (window.innerWidth >= 1400) {
      // Desktop size (>= 1400px)
      slidesPerPage = 10;
    } else if (window.innerWidth >= 992) {
      // Tablet size (992px - 1399px)
      slidesPerPage = 10;
    } else if (window.innerWidth >= 576) {
      // Tablet size (576px - 991px)
      slidesPerPage = 6;
    }
    else {
      // Mobile size (< 575px)
      slidesPerPage = 2;
    }

    totalSlides = Math.ceil(slides.length / slidesPerPage);
    updateSlide(currentGroup);
  }

  // Функція для оновлення слайду
  function updateSlide(newGroup) {
    slides.forEach((slide) => (slide.style.display = 'none'));

    // Калькуляція відступів для відображення
    let start = newGroup * slidesPerPage;
    let end = start + slidesPerPage;
    for (let i = start; i < end && i < slides.length; i++) {
      slides[i].style.display = 'block';
    }

    currentGroup = newGroup;
    slideNumbersLeft.textContent = (currentGroup + 1).toString().padStart(2, '0');
    slideNumbersRight.textContent = totalSlides.toString().padStart(2, '0');
  }

  // Початкове встановлення слайду
  updateSlidesPerPage();
  updateSlide(0);

  // Event listener for window resize
  window.addEventListener('resize', updateSlidesPerPage);

  // Події для кнопок
  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    let newGroup = (currentGroup + 1) % totalSlides;
    updateSlide(newGroup);
  });

  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    let newGroup = (currentGroup - 1 + totalSlides) % totalSlides;
    updateSlide(newGroup);
  });

});
