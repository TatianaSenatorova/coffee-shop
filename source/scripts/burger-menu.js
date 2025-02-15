import {
  mainHeader,
  burger
} from './dom-elements';

mainHeader.classList.remove('main-header--nojs');

const onBurgerClick = () => {
  mainHeader.classList.toggle('main-header--nav-is-opened');
};

burger.addEventListener('click', onBurgerClick);
