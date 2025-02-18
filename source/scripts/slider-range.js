import { sliderInitValues } from './constants';
import { slider, minPriceInput, maxPriceInput } from './dom-elements.js';

noUiSlider.cssClasses.target += 'range';

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
  cssClasses: {
    target: 'target',
    base: 'base',
    origin: 'origin',
    handle: 'testHandle',
    handleLower: 'handle-lower',
    handleUpper: 'handle-upper',
    touchArea: 'touch-area',
    horizontal: 'horizontal',
    vertical: 'vertical',
    background: 'background',
    connect: 'connect',
    connects: 'connects',
    ltr: 'ltr',
    rtl: 'rtl',
    textDirectionLtr: 'txt-dir-ltr',
    textDirectionRtl: 'txt-dir-rtl',
    draggable: 'draggable',
    drag: 'state-drag',
    tap: 'state-tap',
    active: 'active',
    tooltip: 'tooltip',
    pips: 'pips',
    pipsHorizontal: 'pips-horizontal',
    pipsVertical: 'pips-vertical',
    marker: 'marker',
    markerHorizontal: 'marker-horizontal',
    markerVertical: 'marker-vertical',
    markerNormal: 'marker-normal',
    markerLarge: 'marker-large',
    markerSub: 'marker-sub',
    value: 'value',
    valueHorizontal: 'value-horizontal',
    valueVertical: 'value-vertical',
    valueNormal: 'value-normal',
    valueLarge: 'value-large',
    valueSub: 'value-sub',
  },
});

slider.noUiSlider.on('update', (values) => {
  minPriceInput.value = values[0];
  maxPriceInput.value = values[1];
});

// export const updateSlider = (value, index) => {
//   slider.noUiSlider.set(value[index]);
// };
