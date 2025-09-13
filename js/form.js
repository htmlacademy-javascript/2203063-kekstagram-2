import { showModal } from './utils.js';
import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showPopup } from './popups.js';
import { Popups, SubmitButtonText } from './constans.js';
import { postData } from './api.js';
import { removeEscapeControle, setEscapeControle } from './escape-control.js';

const formTag = document.querySelector('.img-upload__form');
const uploadFileTag = document.querySelector('#upload-file');
const modalTag = document.querySelector('.img-upload__overlay');
const modalCloseTag = document.querySelector('#upload-cancel');
const submitButtonTag = document.querySelector('.img-upload__submit');
const descriptionTag = document.querySelector('.text__description');
const hashtagsTag = document.querySelector('.text__hashtags');
const previewTag = document.querySelector('.img-upload__preview img');
const effectsRadios = document.querySelectorAll('.effects__preview');

const closeModal = () => {
  showModal(modalTag, false);
  formTag.reset();
  resetValidation();
  resetEffects();
  resetScale();
};

const canCloseForm = () => !(document.activeElement === hashtagsTag || document.activeElement === descriptionTag);

const setPreview = () => {
  const file = uploadFileTag.files[0];
  const url = URL.createObjectURL(file);
  previewTag.src = url;
  effectsRadios.forEach((radio) => {
    radio.style.backgroundImage = `url('${url}')`;
  });
};

uploadFileTag.addEventListener('change', () => {
  showModal(modalTag);
  setPreview();
  setEscapeControle(closeModal, canCloseForm);
});

modalCloseTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
  removeEscapeControle();
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
        removeEscapeControle();
        showPopup(Popups.SUCCESS);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        disableSubmit(false);
      });
  }
});
