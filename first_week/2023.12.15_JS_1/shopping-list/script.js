const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

const output = document.getElementById('app-title');

document.getElementById('app-title').title = 'Ahmet';
document.getElementById('app-title').innerText = 'Ahmet Sait İnce';
console.log(output);
