import { getStorege, updateStorege } from './create.js';

const update = () => {
  const getContainer = document.querySelector('.taskcontainer');
  getContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots')) {
      e.target.parentElement.querySelector('.descrclass').focus();
      e.target.parentElement.querySelector('.descrclass').classList.add('active');
      e.target.parentElement.querySelector('.descrclass').addEventListener('blur', () => {
        e.target.classList.remove('active');
        const getId = e.target.parentElement.querySelector('.check').id;
        const arr = JSON.parse(getStorege());
        arr.forEach((item) => {
          if (item.index === Number(getId)) {
            item.description = e.target.parentElement.querySelector('.descrclass').value;
            updateStorege(arr);
          }
        });
      });
    }
    if (e.target.classList.contains('descrclass')) {
      e.target.blur();
    }
    if (e.target.classList.contains('check')) {
      e.target.addEventListener('change', (ev) => {
        ev.stopImmediatePropagation();
        const getId = e.target.id;
        const getChecked = e.target.checked;
        const arr = JSON.parse(getStorege());
        arr.forEach((item) => {
          if (item.index === Number(getId)) {
            if (getChecked) {
              item.completed = true;
            } else {
              item.completed = false;
            }
            updateStorege(arr);
          }
        });
      });
    }
  });
};

export default update;