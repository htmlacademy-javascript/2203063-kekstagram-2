import { getPhotos } from "./data.js";
import { renderCards } from "./render.js";
import './form.js';

const pictures = getPhotos();
renderCards (pictures)
