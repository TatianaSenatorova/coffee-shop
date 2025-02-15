const body = document.querySelector('.page__body');
const mainHeader = body.querySelector('.main-header');
const burger = mainHeader.querySelector('.main-header__burger');
const slider = document.querySelector('.range');

const sliderInitValues = {
  MAX: 100000,
  MIN: 0,
  STEP: 1
};

mainHeader.classList.remove('main-header--nojs');

const onBurgerClick = () => {
  mainHeader.classList.toggle('main-header--nav-is-opened');
};

burger.addEventListener('click', onBurgerClick);

noUiSlider.create(slider, {
  range: {
    min: sliderInitValues.MIN,
    max: sliderInitValues.MAX,
  },
  connect: true,
  start: [sliderInitValues.MIN, sliderInitValues.MAX],
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

