import { Effects, EffectsSettings } from './constans.js';
import { showSlider, updateSlider } from './slider.js';

const effectsListTag = document.querySelector('.effects__list');
const previewTag = document.querySelector('.img-upload__preview img');
const levelControlTag = document.querySelector('.effect-level__value');

let currentEffect = Effects.NONE;

const isDefaultEffect = () => currentEffect === Effects.NONE;

export const resetEffects = () => {
  currentEffect = Effects.NONE;
  showSlider(!isDefaultEffect());
  document.querySelector('.effects__radio[value=none]').checked = true;
  previewTag.style.filter = '';
};

effectsListTag.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  const { slider } = EffectsSettings[target.value];
  if (isDefaultEffect()) {
    resetEffects()
  } else {
    updateSlider(slider)
    showSlider(!isDefaultEffect());
  }
});

resetEffects();

