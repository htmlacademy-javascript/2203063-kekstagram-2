import { Scale } from './constans.js';

const minusTag = document.querySelector('.scale__control--smaller');
const plusTag = document.querySelector('.scale__control--bigger');
const controlTag = document.querySelector('.scale__control--value');
const previewTag = document.querySelector('.img-upload__preview img');

let currentScale = Scale.DEFAULT;

const render = () => {
  controlTag.value = `${currentScale}%`;
  previewTag.style.transform = `scale(${currentScale}%)`;
}

minusTag.addEventListener('click', () => {
  currentScale = currentScale > Scale.MIN ? currentScale - Scale.STEP : Scale.MIN;
  render();
});

plusTag.addEventListener('click', () => {
  currentScale = currentScale < Scale.MAX ? currentScale + Scale.STEP : Scale.MAX;
  render();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};

resetScale();
