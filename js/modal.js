import { COMMENTS_STEP } from './constans.js';
import { removeEscapeControle, setEscapeControle } from './escape-control.js';
import { showModal } from './utils.js';

const modalTag = document.querySelector('.big-picture');
const closeButtonTag = modalTag.querySelector('.big-picture__cancel');
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

const renderComments = () => {
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
  showModal(modalTag);
  render({ url, description, comments, likes });
  setEscapeControle(()=>{
    showModal(modalTag, false);
  });
};

closeButtonTag.addEventListener('click', () => {
  showModal(modalTag, false);
  removeEscapeControle();
});

loaderTag.addEventListener('click', () => {
  renderComments();
});
