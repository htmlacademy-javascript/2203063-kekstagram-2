import { Popups } from './constans.js';
import { removeEscapeControle, setEscapeControle } from './escape-control.js';
const bodyTag = document.body;
const successTemplate = document.querySelector(`#${Popups.SUCCESS}`).content.querySelector(`.${Popups.SUCCESS}`);
const errorTemplate = document.querySelector(`#${Popups.ERROR}`).content.querySelector(`.${Popups.ERROR}`);
const templates = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);
  bodyTag.append(popup);
  setEscapeControle(() => {
    popup.remove();
  });

  popup.addEventListener('click', ({target}) => {
    if(target.classList.contains(type) || target.classList.contains(`${type}__button`)){
      popup.remove();
      removeEscapeControle();
    }
  });
};
