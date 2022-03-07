const hoursDiv = document.querySelector('.hours');
const minutesDiv = document.querySelector('.minutes');
const secondsDiv = document.querySelector('.seconds');
const amPmDiv = document.querySelector('.am-pm');

const hours = new Date().getHours().toString().padStart(2, 0);
const minutes = new Date().getMinutes().toString().padStart(2, 0);
const seconds = new Date().getSeconds().toString().padStart(2, 0);
const currentAmPm = hours / 12 < 1 ? 'AM' : 'PM';

setInterval(() => {
  hoursDiv.innerText = `${new Date().getHours().toString().padStart(2, 0)}`;
  minutesDiv.innerText = `${new Date().getMinutes().toString().padStart(2, 0)}`;
  secondsDiv.innerText = `${new Date().getSeconds().toString().padStart(2, 0)}`;
  amPmDiv.innerText = `${currentAmPm}`;
}, 1000);
