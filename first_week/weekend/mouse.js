const logo = document.querySelector('img');
logo.style.cursor = 'pointer';

function onClick() {
  if (document.body.style.backgroundColor != 'black') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
}

logo.addEventListener('click', onClick);
