// const photos = [
//   {
//     id: 1,
//     url: 'photos/1.jpg',
//     description: 'Утро',
//     likes: 15,
//     comments: [
//       {
//         id: 135,
//         avatar: 'img/avatar-6.svg',
//         message: 'В целом всё неплохо. Но не всё.',
//         name: 'Артём',
//       },
//  ]
//   },
// ]

const DESCRIPTION = [
  'Утро',
  'Котик',
  'Солнышко',
  'Море',
  'Облака',
];

const NAME = [
  'Иван',
  'Елена',
  'Игорь',
  'Анна',
];

const MESSAGE = [
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
];

const PHOTOS_COUNT = 25;
const MIN_ID_COMMENT = 2000;
const MAX_ID_COMMENT = 10000;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const getRandomElement = (items) => items[getRandomInteger(0, items.length - 1)];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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

const getPhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push(getPhoto(i))
  }

  return photos;
};

console.log(getPhotos());
