const clock = document.querySelector("h2#clock");
const date = document.querySelector("h3#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function getTodayDate() {
  const date2 = new Date();
  const year = date2.getFullYear();
  const month = String(date2.getMonth() + 1).padStart(2, "0");
  const day = String(date2.getDate()).padStart(2, "0");
  date.innerText = `${year} - ${month} - ${day}`;
}

getTodayDate();
getClock();
setInterval(getTodayDate, 1000 * 60 * 60 * 24);
setInterval(getClock, 1000);
