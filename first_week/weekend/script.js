const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = "";

  // items.forEach((item) => item.remove());

  // The Most Performant Way
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// clearBtn.onclick = function () {
//  alert('Clear Items');
// };

// Add Event Listener

// clearBtn.addEventListener('click', () => {
//  alert('Clear Items');
//  });

// clearBtn.addEventListener('click', onClear);
// setTimeout(() => clearBtn.click(), 5000);
