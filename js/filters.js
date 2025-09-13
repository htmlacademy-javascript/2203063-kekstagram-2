import { Filters, RANDOM_COUNT, RANDOM_FACTOR } from './constans.js';
import { renderCards } from './render.js';
import { debounce } from './utils.js';

const filtersTag = document.querySelector('.img-filters');
const formTag = document.querySelector('.img-filters__form');

let localPhotos;
const debouncedRender = debounce(renderCards);

const filterActions = {
  [Filters.DEFAULT]: () => localPhotos,
  [Filters.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length),
  [Filters.RANDOM]: () => [...localPhotos].sort(() => Math.random() - RANDOM_FACTOR).slice(0, RANDOM_COUNT)
};

export const initFilters = (photos) => {
  localPhotos = [...photos];
  filtersTag.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

formTag.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    setActiveButton(button);
    debouncedRender(filterActions[button.id]());
  }
});
