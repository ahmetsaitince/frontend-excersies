const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

const output = document.getElementById('app-title');

const title = document.getElementById('app-title');

// Get / change content

title.innerText = 'Ahmet Sait İnce';
title.innerHTML = '<span>Murat Alemdar</span>';

// Change styles

title.style.backgroundColor = 'black';
title.style.color = '#f1f1f1';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()

console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('#app-title'));

console.log(document.querySelector('li:nth-child(2)').innerText);

// querySelectorAll()

const listItems = document.querySelectorAll('.items li');

listItems.forEach((item) => {
  item.style.color = 'red';
});

// querySelector().parent element;
// querySelector().nextElementSibling;
// querySelector().previousElementSibling;

// Nodes
