const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);
  return li;
}
