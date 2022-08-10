import './style.css';
import del from '../modules/delete.js';
import { add } from '../modules/create.js';
import update from '../modules/update.js';

// ADD
const getEnter = document.querySelector('.addwrapper');
getEnter.addEventListener('submit', (e) => {
  e.preventDefault();
  add();
});
const getInput = document.querySelector('.add');
getInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('btn').click();
  }
});
del();
update();
