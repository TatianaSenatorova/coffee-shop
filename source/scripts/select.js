import {
  selectButton,
  select,
  selectClose
} from './dom-elements.js';

const onSelectButtonClick = () =>{
  select.classList.add('select--is-opened');
};

const onSelectCloseClick = () =>{
  select.classList.remove('select--is-opened');
};

selectButton.addEventListener('click', onSelectButtonClick);

selectClose.addEventListener('click', onSelectCloseClick);


