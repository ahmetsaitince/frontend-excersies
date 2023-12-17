function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');
  const li = document.createElement('li');
  li.textContent = 'Macbook Air M1';
  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li>Replaced Second</li>';
}

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  //  lis.forEach((item, index) => {
  //    if (index === 1) {
  //      item.innerHTML = 'Second Item';
  //    } else {
  //      item.innerHTML = 'Replace All';
  //    }

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>item</li>')
  );
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
