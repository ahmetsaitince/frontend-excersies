const age = 19;

// Using an in if statement

if (age >= 18) {
  console.log('You can vote.');
} else {
  console.log('You can not vote.');
}

// Using a ternary operator

age >= 18 ? console.log('You can vote.') : console.log('You can not vote.');

// Assinging a conditional value to a variable

const canVote = age >= 18 ? true : false;

console.log(canVote);

// Multiple statements

const auth = true;
let redirect;

if (auth) {
  alert('Welcome to the dahsboard');
  redirect = '/dashboard';
} else {
  alert('Access Denied');
  redirect = '/login';
}
