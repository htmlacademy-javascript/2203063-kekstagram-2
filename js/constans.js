export const DESCRIPTION = [
  'Утро',
  'Котик',
  'Солнышко',
  'Море',
  'Облака',
];

export const NAME = [
  'Иван',
  'Елена',
  'Игорь',
  'Анна',
];

export const MESSAGE = [
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
];

export const PHOTOS_COUNT = 25;
export const MIN_ID_COMMENT = 2000;
export const MAX_ID_COMMENT = 10000;
export const MIN_AVATAR = 1;
export const MAX_AVATAR = 6;
export const MIN_COMMENTS = 0;
export const MAX_COMMENTS = 30;
export const MIN_LIKES = 15;
export const MAX_LIKES = 200;

export const COMMENTS_STEP = 5;

export const MAX_DESCRIPTION = 140;

export const HASHTAG_FORMULA = /^#[a-zа-яё0-9]{1,19}$/i;

export const MAX_HASHTAGS = 5;

export const Scale = {
  DEFAULT: 100,
  MAX: 100,
  MIN: 25,
  STEP: 25
};

export const Effects = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
export const EffectsSettings = {
  [Effects.NONE]: {},
  [Effects.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1
    },
    style: 'grayscale',
    units: ''
  },
  [Effects.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1
    },
    style: 'sepia',
    units: ''
  },
  [Effects.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100
    },
    style: 'invert',
    units: '%'
  },
  [Effects.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3
    },
    style: 'blur',
    units: 'px'
  },
  [Effects.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3
    },
    style: 'brightness',
    units: ''
  },

}
