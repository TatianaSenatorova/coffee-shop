import {
  selectButton,
  select,
  selectClose
} from './dom-elements.js';

const onSelectButtonClick = () =>{
  console.log('123');
  select.classList.add('select--is-opened');
};

const onSelectCloseClick = () =>{
  console.log('456');
  select.classList.remove('select--is-opened');
};

selectButton.addEventListener('click', onSelectButtonClick);

selectClose.addEventListener('click', onSelectCloseClick);


