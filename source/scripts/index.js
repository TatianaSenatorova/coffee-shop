const body = document.querySelector('.page__body');
const mainHeader = body.querySelector('.main-header');
const burger = mainHeader.querySelector('.main-header__burger');
console.log(burger);

mainHeader.classList.remove('main-header--nojs');

const onBurgerClick = () => {
  console.log(mainHeader.classList.contains('main-header--nav-is-opened'));
  mainHeader.classList.toggle('main-header--nav-is-opened');
  // if(mainHeader.classList.contains('main-header--nav-is-opened')){
  //   mainHeader.classList.remove('main-header--nav-is-opened');
  // }else {
  //   mainHeader.classList.add('main-header--nav-is-opened');
  // }
  burger.removeEventListener('click', onBurgerClick);
};

burger.addEventListener('click', onBurgerClick);

