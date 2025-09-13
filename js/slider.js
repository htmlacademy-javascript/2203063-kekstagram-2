import { EffectsSettings } from './constans.js';

const sliderTag = document.querySelector('.effect-level__slider');
const levelControlTag = document.querySelector('.effect-level__value');
const previewTag = document.querySelector('.img-upload__preview img');
const effectContainerTag = document.querySelector('.effect-level');

noUiSlider.create(sliderTag, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

export const updateSlider = (settings) => {
  sliderTag.noUiSlider.updateOptions({ ...settings });
};

export const renderEffect = () => {
  const currentEffect = document.querySelector('.effects__radio:checked').value;
  const { style, units } = EffectsSettings[currentEffect];
  previewTag.style.filter = `${style}(${levelControlTag.value}${units})`;
};

sliderTag.noUiSlider.on('update', () => {
  levelControlTag.value = sliderTag.noUiSlider.get();
  renderEffect();
});

export const showSlider = (isVisible = true) => {
  if (isVisible) {
    effectContainerTag.classList.remove('hidden');
  } else {
    effectContainerTag.classList.add('hidden');
  }
};
