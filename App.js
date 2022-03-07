const hoursDiv = document.querySelector('.hours');
const minutesDiv = document.querySelector('.minutes');
const secondsDiv = document.querySelector('.seconds');
const amPmDiv = document.querySelector('.am-pm');

setInterval(() => {
  hoursDiv.innerText = `${new Date().getHours().toString().padStart(2, 0)}`;
  minutesDiv.innerText = `${new Date().getMinutes().toString().padStart(2, 0)}`;
  secondsDiv.innerText = `${new Date().getSeconds().toString().padStart(2, 0)}`;
  amPmDiv.innerText = `${+hoursDiv.innerText / 12 < 1 ? 'AM' : 'PM'}`;
}, 1000);
