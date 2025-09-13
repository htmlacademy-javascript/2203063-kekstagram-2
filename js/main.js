import { renderCards } from "./render.js";
import './form.js';
import { showAlert } from "./utils.js";
import { getData } from "./api.js";

getData()
  .then((photos) => {
    renderCards(photos);
  })
  .catch(() => {
    showAlert();
  })
