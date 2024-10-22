// JavaScript to move clock hands according to current time
const hourHand = document.querySelectorAll('.hand i')[0];
const minuteHand = document.querySelectorAll('.hand i')[1];
const secondHand = document.querySelectorAll('.hand i')[2];

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegree = (seconds / 60) * 360;
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegree = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // initial call to set clock at the correct time when page loads
