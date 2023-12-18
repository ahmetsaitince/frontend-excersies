const xhr = new XMLHttpRequest();
const button = document.querySelector('#joke-btn');
let joke_json = '1';

const joke_space = document.querySelector('#joke');

function jokeCreator() {
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        joke_json = JSON.parse(this.responseText);
        const joke = joke_json.value;
        joke_space.innerHTML = `<p>${joke}</p>`;
      } else {
        joke_space.innerHTML = `<p>Oops...</p>`;
      }
    }
  };

  xhr.send();
}

button.addEventListener('click', jokeCreator);
