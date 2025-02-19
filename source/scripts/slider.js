import {
  sliderContainer,
  sliderElements,
  sliderArrowButton,
  sliderPaginationButtons,
} from './dom-elements.js';

const slideWidth = sliderContainer.offsetWidth;
let currentSlide = 0;

// const updateSlider = () => {

// }

// const onSliderArrowClick = () => {
//   updateSlider();

// };

sliderPaginationButtons.forEach((button, index) => {
  console.log(index);
  button.addEventListener('click', () => {
    if (index !== currentSlide) {
     console.log('123');
    }
  })
})

// sliderArrowButton.addEventListener('click', onSliderArrowClick);
