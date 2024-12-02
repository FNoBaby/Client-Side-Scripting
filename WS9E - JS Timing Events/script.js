document.getElementById('control-button').addEventListener('click', startTrafficLight);

let isRunning = false;

function startTrafficLight() {
  document.getElementById('control-button').style.visibility = 'hidden';
  if (isRunning) return;
  isRunning = true;

  const redLight = document.querySelector('.light.red');
  const yellowLight = document.querySelector('.light.yellow');
  const greenLight = document.querySelector('.light.green');

  // Initial Setup
  greenLight.classList.add('active');
  yellowLight.classList.remove('active');
  redLight.classList.remove('active');

  // Switch Yellow 
  setTimeout(() => {
    greenLight.classList.remove('active');
    yellowLight.classList.add('active');
  }, 3000);

  // Switch Red
  setTimeout(() => {
    yellowLight.classList.remove('active');
    redLight.classList.add('active');
  }, 4000);

  // Switch Yellow
  setTimeout(() => {
    redLight.classList.remove('active');
    yellowLight.classList.add('active');
  }, 14000);

  //Reset Function
  setTimeout(() => {
    yellowLight.classList.remove('active');
    greenLight.classList.add('active');
    isRunning = false;
    document.getElementById('control-button').style.visibility = 'visible';
  }, 15000);
}
