import { showModal } from './utils.js';
import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showPopup } from './popups.js';
import { Popups, SubmitButtonText } from './constans.js';
import { postData } from './api.js';

const formTag = document.querySelector('.img-upload__form');
const uploadFileTag = document.querySelector('#upload-file');
const modalTag = document.querySelector('.img-upload__overlay');
const modalCloseTag = document.querySelector('#upload-cancel');
const submitButtonTag = document.querySelector('.img-upload__submit');

uploadFileTag.addEventListener('change', () => {
  showModal(modalTag);
});

const closeModal = () => {
  showModal(modalTag, false);
  formTag.reset();
  resetValidation();
  resetEffects();
  resetScale();
};

modalCloseTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

const disableSubmit = (isDisabled = true) => {
  submitButtonTag.disabled = isDisabled;
  submitButtonTag.textContent = isDisabled ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

formTag.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    disableSubmit();
    postData(new FormData(formTag))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeModal();
        showPopup(Popups.SUCCESS);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        disableSubmit(false);
      })
  }
});
