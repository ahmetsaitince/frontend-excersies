fetch('https://randomuser.me/api')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const results = data.results[0];
    const url = results.picture.large;
    const gender = results.gender;
    const name = results.name;
      const email = results.email;
      const phone
  });
