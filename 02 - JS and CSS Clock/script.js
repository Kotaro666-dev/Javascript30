const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

// My way
// var second = 0;
// var min = 0;
// var hour = 0;

// let oneSecond = function() {
//   secHand.style.transform = `rotate(${second * 6}deg)`;
//   minHand.style.transform = `rotate(${min * 6}deg)`;
//   hourHand.style.transform = `rotate(${hour * 30}deg)`;
//   if (second == 60) {
//     min++;
//     second = 0;
//   }
//   if (min == 60) {
//     hour++;
//     min = 0;
//   }
//   second++;
// };

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegreees = (mins / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  updateClock(secondsDegrees, minsDegreees, hoursDegrees);
}

function updateClock(secondsDegrees, minsDegreees, hoursDegrees) {
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegreees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
