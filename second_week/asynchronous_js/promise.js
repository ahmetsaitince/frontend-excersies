const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

promise.then(() => console.log('Promise consumed...'));

// yarım bıraktım
