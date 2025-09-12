import { showModal } from './utils.js';
import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import './effects.js';
import { resetEffects } from './effects.js';

const formTag = document.querySelector('.img-upload__form');
const uploadFileTag = document.querySelector('#upload-file');
const modalTag = document.querySelector('.img-upload__overlay');
const modalCloseTag = document.querySelector('#upload-cancel');

uploadFileTag.addEventListener('change', () => {
  showModal(modalTag);
});

const closeModal = () => {
  showModal(modalTag, false);
  //form reset
  formTag.reset();

  resetValidation();
  resetEffects();
  resetScale();
};

modalCloseTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

formTag.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});
