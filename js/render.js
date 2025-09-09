import { openModal } from './modal.js';

const containerTag = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const renderCards = (photos) => {
  console.log(photos);
  const fragment = document.createDocumentFragment();
  photos.forEach(({url, description, comments, likes}) => {
    const newCard = cardTemplate.cloneNode(true);
    const image = newCard.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    newCard.querySelector('.picture__comments').textContent = comments.length;
    newCard.querySelector('.picture__likes').textContent = likes;

    newCard.addEventListener('click', () => {
      openModal({ url, description, comments, likes })
    })

    fragment.append(newCard);
  });

  containerTag.append(fragment);
}
