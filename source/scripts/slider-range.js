import { sliderInitValues } from './constants';
import { slider, minPriceInput, maxPriceInput } from './dom-elements.js';

// noUiSlider.cssClasses.target += 'range';

noUiSlider.create(slider, {
  range: {
    min: sliderInitValues.MIN,
    max: sliderInitValues.MAX,
  },
  connect: true,
  start: [sliderInitValues.START_MIN, sliderInitValues.START_MAX],
  step: sliderInitValues.STEP,
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

slider.noUiSlider.on('update', (values) => {
  console.log(slider, values, minPriceInput, maxPriceInput);
  minPriceInput.value = values[0];
  maxPriceInput.value = values[1];
});

// export const updateSlider = (value, index) => {
//   slider.noUiSlider.set(value[index]);
// };
