import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes');
const seconds = document.querySelector('[data-seconds]');
const dataPicker = document.querySelector('#datetime-picker');

startBtn.setAttribute('disabled', true);

let timerId = null;

const nowMS = new Date().getTime();
let selectedTimeMs = 0;
let diff;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTimeMs = selectedDates[0].getTime();
    diff = selectedTimeMs - nowMS;
    if (diff < 0) {
      diff = 0;
      return alert('Please choose a date in the future');
    }
    startBtn.removeAttribute('disabled');
    clearInterval(timerId);
  },
};

flatpickr(dataPicker, options);

const onClick = () => {
  startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
    let formatedDateDiff = convertMs(diff);
    diff -= 1000;
    days.textContent = addLeadingZero(formatedDateDiff.days);
    hours.textContent = addLeadingZero(formatedDateDiff.hours);
    minutes.textContent = addLeadingZero(formatedDateDiff.minutes);
    seconds.textContent = addLeadingZero(formatedDateDiff.seconds);
    if (diff <= 0) {
      clearInterval(timerId);
    }
  }, 1000);
};
startBtn.addEventListener('click', onClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
