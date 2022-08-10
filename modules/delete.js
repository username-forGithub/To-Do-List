import { getStorege, updateStorege } from './create.js';

export default function del() {
  const getContainer = document.querySelector('.taskcontainer');
  getContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash')) {
      const getId = e.target.parentElement.querySelector('.check').id;
      let arr = JSON.parse(getStorege());
      arr = arr.filter((prop) => prop.index !== Number(getId));
      updateStorege(arr);
      e.target.parentElement.remove();
    }
    if (e.target.classList.contains('check')) {
      e.target.parentElement.classList.toggle('active');
    }
  });
  const remall = document.querySelector('.remall');
  remall.addEventListener('click', () => {
    const allLi = document.querySelectorAll('.taskcontainer li .check:checked');
    let arr = JSON.parse(getStorege());
    allLi.forEach((item) => {
      arr = arr.filter((prop) => prop.index !== Number(item.id));
      item.parentElement.remove();
    });
    updateStorege(arr);
  });
}