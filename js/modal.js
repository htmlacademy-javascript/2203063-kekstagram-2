const modalTag = document.querySelector('.big-picture');
const closeButtonTag = modalTag.querySelector('.big-picture__cancel');
const bodyTag = document.body;
const imageTag = modalTag.querySelector('.big-picture__img img');
const titleTag = modalTag.querySelector('.social__caption');
const likesTag = modalTag.querySelector('.likes-count');
const totalCommentsTag = modalTag.querySelector('.social__comment-total-count');
const commentTemplate = modalTag.querySelector('.social__comment');
const commentsContainerTag = modalTag.querySelector('.social__comments');

const showModal = (isShown = true) => {
  if (isShown) {
    modalTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach(({ avatar, message, name }) => {
    const newComment = commentTemplate.cloneNode(true);
    const image = newComment.querySelector('.social__picture');
    image.src = avatar;
    image.alt = name;
    newComment.querySelector('.social__text').textContent = message;
    fragment.append(newComment);
  });
  commentsContainerTag.append(fragment);
}

const render = ({ url, description, comments, likes }) => {
  imageTag.src = url;
  titleTag.textContent = description;
  likesTag.textContent = likes;
  totalCommentsTag.textContent = comments.length;
  commentsContainerTag.innerHTML = '';
  renderComments(comments);
};

export const openModal = ({ url, description, comments, likes }) => {
  showModal();
  render({ url, description, comments, likes });
};

closeButtonTag.addEventListener('click', () => {
  showModal(false);
});
