import { HASHTAG_FORMULA } from './constans.js';
import { MAX_DESCRIPTION, MAX_HASHTAGS } from './constans.js';

const formTag = document.querySelector('.img-upload__form');
const descriptionTag = document.querySelector('.text__description');
const hashtagsTag = document.querySelector('.text__hashtags');

const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

const checkHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

const checkHashtagsLength = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const checkUniquesHashTags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

pristine.addValidator(
  descriptionTag,
  checkDescription,
  `Длина описания фотографии не должна превышать ${MAX_DESCRIPTION} символов`
);

pristine.addValidator(
  hashtagsTag,
  checkHashtags,
  'Хештеги должны начинаться с символа решетки и состоять из букв или цифр, нельзя использовать знаки пунктуации, эмодзи или спецсимволы'
);

pristine.addValidator(
  hashtagsTag,
  checkHashtagsLength,
  `Количество хештегов не должно превышать ${MAX_HASHTAGS}`
);

pristine.addValidator(
  hashtagsTag,
  checkUniquesHashTags,
  'Хештеги не должны повторяться'
);

export const isValid = () => pristine.validate();
export const resetValidation = () => {
  pristine.reset();
};
