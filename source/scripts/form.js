import {
  minPriceInput,
  maxPriceInput
} from './dom-elements.js';
import { updateSlider } from './slider-range.js';


const onMinPriceInput = ({target}) =>{
  const index = 0;
  updateSlider([parseInt(target.value, 10), 0], index);
};

// const onMaxPriceInput = ({target}) =>{
//   console.log(target);
//   const index = 1;
//   updateSlider([parseInt(target.value, 10)], index);
// };

// maxPriceInput.addEventListener('input', onMaxPriceInput);

minPriceInput.addEventListener('input', onMinPriceInput);


