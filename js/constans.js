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
};

export const ALERT_DELAY = 5000;
export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const SubmitButtonText = {
  SENDING: 'Публикую...',
  IDLE: 'Опубликовать'
};

export const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const RANDOM_FACTOR = 0.5;
export const RANDOM_COUNT = 10;
