import {DESCRIPTION, MAX_AVATAR, MAX_COMMENTS, MAX_ID_COMMENT, MAX_LIKES, MESSAGE, MIN_AVATAR, MIN_COMMENTS, MIN_ID_COMMENT, MIN_LIKES, NAME, PHOTOS_COUNT} from './constans.js';
import { getRandomElement, getRandomInteger} from './utils.js';

const getComment = () => ({
  id: getRandomInteger(MIN_ID_COMMENT, MAX_ID_COMMENT),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomElement(MESSAGE),
  name: getRandomElement(NAME),
});

const getComments = () => {
  const countComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const comments = [];
  for (let i = 1; i <= countComments; i++) {
    comments.push(getComment())
  }
  return comments;
};

const getPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments()
});

export const getPhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push(getPhoto(i))
  }

  return photos;
};
