import { openModal } from './modal.js';

const containerTag = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');

let localPhotos;

const clear = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

export const renderCards = (photos) => {
  clear();
  localPhotos = [...photos];
  const fragment = document.createDocumentFragment();
  photos.forEach(({ url, description, comments, likes, id }) => {
    const newCard = cardTemplate.cloneNode(true);
    const image = newCard.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    newCard.querySelector('.picture__comments').textContent = comments.length;
    newCard.querySelector('.picture__likes').textContent = likes;
    newCard.dataset.id = id;
    fragment.append(newCard);
  });
  containerTag.append(fragment);
};

containerTag.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photo = localPhotos.find((item) => item.id === id);
    openModal(photo);
  }
});
