const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (social) {
//  console.log(social);
// });

// Some kind of "for loop"...

// socials.forEach((item) => console.log(item));

function logSocial(social) {
  console.log(social);
}

// socials.forEach(logSocial);

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com/' },
  { name: 'LinkedIn', url: 'https://linkedin.com/' },
  { name: 'Facebook', url: 'https://instagram.com/' },
];

// socialObjs.forEach((item) => console.log(item.url));

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Three', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Four', category: 'technology', start: 1981, end: 2004 },
  { name: 'Company Five', category: 'Retail', start: 1981, end: 2004 },
];

companies.forEach((x) => {
  if (x.category == 'Retail') {
    console.log(x);
  }
});

let company_category = companies.filter(
  (company) => company.category == 'Retail'
);
