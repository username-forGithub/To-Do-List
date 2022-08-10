import trash from '../src/asset/images/remove.png';
import dots from '../src/asset/images/dots.png';

export function updateStorege(arr) {
  localStorage.setItem('arrStored', JSON.stringify(arr));
}
const getflag = localStorage.getItem('flag');
if (getflag === null) {
  const place = [
    {
      description: 'Car wash',
      completed: false,
      index: 0,
    },
    {
      description: 'Shopping',
      completed: false,
      index: 1,
    },
  ];
  updateStorege(place);
}
localStorage.setItem('flag', 'yes');
let arr = [];
let taskobj1;
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
export function getStorege() {
  const locarr = localStorage.getItem('arrStored');
  if (locarr === 'undefined' || locarr === null) {
    return false;
  } if (locarr !== null && Array.isArray(JSON.parse(locarr)) && JSON.parse(locarr).length === 0) {
    return false;
  }
  return locarr;
}
function show() {
  const element = document.querySelector('.taskcontainer');
  let htmlstring = '';
  if (localStorage.getItem('arrStored') && localStorage.getItem('arrStored') !== 'false') {
    arr.forEach((item) => {
      let string = `
        <li>
        <input type="checkbox" class="check" name="" id="${item.index}">
        <input class="descrclass" type="text" value="${item.description}">
        <img class="trash" src="${trash}">
        <img class="dots" src="${dots}">
        </li>
                  `;
      htmlstring += string;
      string = '';
    });
    element.innerHTML = htmlstring;
  }
}
if (getStorege() !== false) {
  arr = JSON.parse(getStorege());
  show();
}
export function add() {
  const addValue = document.querySelector('.add').value;
  const comp = false;
  let ind = 0;
  if (getStorege() !== false) {
    ind = Math.max(...JSON.parse(getStorege()).map((o) => o.index)) + 1;
  }
  taskobj1 = new Task(addValue, comp, ind);
  if (getStorege()) {
    arr = JSON.parse(getStorege());
  } else {
    arr = [];
  }
  arr.push(taskobj1);
  document.querySelector('.add').value = '';
  updateStorege(arr);
  show();
}

// localStorage.removeItem('flag')
// localStorage.removeItem('arrStored')