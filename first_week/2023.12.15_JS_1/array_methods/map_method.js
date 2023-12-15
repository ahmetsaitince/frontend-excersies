const numbers = [1, 2, 3, 4, 5];

// const doubled_numbers = numbers.map((number) => number * 2);

const doubled_numbers = [];

numbers.forEach(function (number) {
  doubled_numbers.push(number * 2);
});

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Three', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Four', category: 'technology', start: 1981, end: 2004 },
  { name: 'Company Five', category: 'Retail', start: 1981, end: 2004 },
];

const company_names = companies.map((company) => company.name);
console.log(company_names);

const company_obs = companies.map((company) => {
  return {
    // returning object
    company_name: company.name,
    company_category: company.category,
  };
});

console.log(company_obs);

// Chain map methods

const squareAndDobule = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDobule);
