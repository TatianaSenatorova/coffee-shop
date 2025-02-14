const body = document.querySelector('.page__body');
const mainHeader = body.querySelector('.main-header');
const burger = mainHeader.querySelector('.main-header__burger');
console.log(burger);

mainHeader.classList.remove('main-header--nojs');

const onBurgerClick = () => {
  mainHeader.classList.toggle('main-header--nav-is-opened');
  burger.removeEventListener('click', onBurgerClick);
};

burger.addEventListener('click', onBurgerClick);

