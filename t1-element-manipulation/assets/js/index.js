import { styleThings, addClock, addContent } from "./utilities.js";

window.addEventListener('DOMContentLoaded', e => {
  addClock();
  addContent();
  styleThings();

  let clock = document.querySelector('.time')
  let runClock = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    
    clock.innerHTML = `${h}:${m}:<span>${s}</span>`
  }
  setInterval(runClock, 1000);
});