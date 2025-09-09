import { COMMENTS_STEP } from './constans.js';

const modalTag = document.querySelector('.big-picture');
const closeButtonTag = modalTag.querySelector('.big-picture__cancel');
const bodyTag = document.body;
const imageTag = modalTag.querySelector('.big-picture__img img');
const titleTag = modalTag.querySelector('.social__caption');
const likesTag = modalTag.querySelector('.likes-count');
const totalCommentsTag = modalTag.querySelector('.social__comment-total-count');
const commentTemplate = modalTag.querySelector('.social__comment');
const commentsContainerTag = modalTag.querySelector('.social__comments');
const statisticTag = modalTag.querySelector('.social__comment-shown-count');
const loaderTag = modalTag.querySelector('.comments-loader');

let localPhotos;
let renderedComments = 0;

const showModal = (isShown = true) => {
  if (isShown) {
    modalTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
};

const renderStatistic = () => {
  statisticTag.textContent = renderedComments;
};

const renderLoader = () => {
  if(!localPhotos.length){
    loaderTag.classList.add('hidden');
  }else{
    loaderTag.classList.remove('hidden');
  }
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  localPhotos.splice(0, COMMENTS_STEP).forEach(({ avatar, message, name }) => {
    const newComment = commentTemplate.cloneNode(true);
    const image = newComment.querySelector('.social__picture');
    image.src = avatar;
    image.alt = name;
    newComment.querySelector('.social__text').textContent = message;
    fragment.append(newComment);
    renderedComments++;
  });
  commentsContainerTag.append(fragment);

  renderStatistic();
  renderLoader();
};

const render = ({ url, description, comments, likes }) => {
  imageTag.src = url;
  titleTag.textContent = description;
  likesTag.textContent = likes;
  totalCommentsTag.textContent = comments.length;
  commentsContainerTag.innerHTML = '';
  renderedComments = 0;
  localPhotos = [...comments];
  renderComments();
};

export const openModal = ({ url, description, comments, likes }) => {
  showModal();
  render({ url, description, comments, likes });
};

closeButtonTag.addEventListener('click', () => {
  showModal(false);
});

loaderTag.addEventListener('click', () => {
  renderComments();
});
