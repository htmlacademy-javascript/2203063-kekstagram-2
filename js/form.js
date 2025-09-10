import { showModal } from './utils.js';
import { isValid, resetValidation } from './validation.js';
const formTag = document.querySelector('.img-upload__form');

const uploadFileTag = document.querySelector('#upload-file');
const modalTag = document.querySelector('.img-upload__overlay');
const modalCloseTag = document.querySelector('#upload-cancel');

uploadFileTag.addEventListener('change', () => {
    showModal(modalTag);
});

modalCloseTag.addEventListener('click', () => {
     showModal(modalTag, false);
     //form reset

     resetValidation();
     //resetEffect
     //resetScale
});

formTag.addEventListener('submit', (evt) => {
    if(!isValid()){
        evt.preventDefault();
    }
});