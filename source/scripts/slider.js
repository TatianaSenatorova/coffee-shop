import {
  sliderContainer,
  sliderPaginationButtons,
  sliderList,
  sliderPrevButton,
  sliderNextButton,
  sliderItems,
  sliderArrowButtons
} from './dom-elements.js';

const slideWidth = sliderContainer.offsetWidth;
let currentIndex = 0;
sliderPrevButton.disabled = true;

const updateSlider = () => {
  sliderArrowButtons.forEach((button) =>{
    button.disabled = false;
  }
  );
  if(currentIndex === 0) {
    sliderPrevButton.disabled = true;
  } else if(currentIndex === sliderItems.length - 1) {
    sliderNextButton.disabled = true;
  }
  sliderPaginationButtons.forEach((button) =>
    button.classList.remove('slider__pagination-button--is-current')
  );
  sliderPaginationButtons[currentIndex].classList.add(
    'slider__pagination-button--is-current'
  );
  sliderList.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
};

sliderPaginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === currentIndex) {
      return;
    }
    currentIndex = index;
    updateSlider();
  });
});

sliderPrevButton.addEventListener('click', () => {
  currentIndex--;
  updateSlider();
});

sliderNextButton.addEventListener('click', () => {
  currentIndex++;
  updateSlider();
});

const onDocumentKeyDown = (evt) => {
  if (evt.key === 'ArrowRight' && currentIndex !== (sliderItems.length - 1)) {
    currentIndex++;
    updateSlider();
  } else if (evt.key === 'ArrowLeft' && currentIndex !== 0){
    currentIndex--;
    updateSlider();
  }
};

document.addEventListener('keydown', onDocumentKeyDown);

