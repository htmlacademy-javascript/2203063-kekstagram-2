import { ALERT_DELAY } from './constans.js';

const bodyTag = document.body;
const alertTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

export const showModal = (modalTag, isShown = true) => {
  if (isShown) {
    modalTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
};

export const showAlert = () => {
  const alert = alertTemplate.cloneNode(true);
  bodyTag.append(alert);
  setTimeout(() => {
    alert.remove();
  }, ALERT_DELAY)
}
