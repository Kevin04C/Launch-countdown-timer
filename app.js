const $days = document.querySelector("#days");
const $hours = document.querySelector("#hours");
const $minutes = document.querySelector("#minutes");
const $seconds = document.querySelector("#seconds");
setInterval(() => {
  let date = new Date();

  $days.textContent = `0${date.getDate()}`.slice(-2);
  $hours.textContent = `0${date.getHours()}`.slice(-2);
  $minutes.textContent = `0${date.getMinutes()}`.slice(-2);
  $seconds.textContent = `0${date.getSeconds()}`.slice(-2);
}, 1000);
