const button1 = document.body.querySelectorAll('.row2 button')[0];
const button2 = document.body.querySelectorAll('.row2 button')[1];
const button0 = document.body.querySelectorAll('.row1 button')[0];
let disco;

function backgroundChanger() {
  if (document.body.style.backgroundColor !== 'rgb(9, 38, 53)') {
    document.body.style.backgroundColor = 'rgb(9, 38, 53)';
    document.body.style.color = 'rgb(158, 200, 185)';
  } else {
    document.body.style.backgroundColor = 'rgb(158, 200, 185)';
    document.body.style.color = 'rgb(9, 38, 53)';
  }
}

function backgroundChangerStuff() {
  setTimeout(backgroundChanger, 1000);
}

function changeRequest() {
  button0.addEventListener('click', backgroundChangerStuff);
}

function discoMaker() {
  button1.addEventListener('click', function () {
    disco = setInterval(backgroundChanger, 1000);
  });
}

function discoStopper() {
  button2.addEventListener('click', function () {
    clearInterval(disco);
  });
}

changeRequest();
discoMaker();
discoStopper();
