function removeClearButton() {
  document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');
  ul.removeChild(li);
}

function removeItem(item_number) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${item_number})`);
  ul.removeChild(li);
}

removeClearButton();
removeFirstItem();
removeItem(2);
