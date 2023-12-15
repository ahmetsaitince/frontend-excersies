let x;

const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array
arr.push(100);

// pop() - Take the last value off
arr.pop();

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - Remove first value
arr.shift();

// reverse() - Reverse an array
arr.reverse();

// includes() - Check to see if something is in the array
x = arr.includes(445);

// indexOf() - Return the index of the first match
x = arr.indexOf(28);

// Return array as a string
x = arr.toString();
x = arr.join();

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);

const fruits = ['Apple'];
const berries = ['Strawberry'];

// concat() - Concatenate arrays
x = fruits.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// flat() - Flatten an array
const arr_second = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr_second.flat();

// isArray() - Check is is an array
x = Array.isArray(fruits);

// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

const obj2 = { c: 3, d: 4 };

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Spread operator
const obj3 = { ...person, ...obj2 };
// Same as using ...
const obj4 = Object.assign({}, person, obj2);

// Get array of object keys
x = Object.keys(person);

// Get length of an object
x = Object.keys(person).length;

// Get array of object values
x = Object.values(person);

// Get array of object key/value pairs
x = Object.entries(person);

// Check if object has a property
x = person.hasOwnProperty('person');

// Convert to JSON string
const str = JSON.stringify(person);

// Parse JSON
const obj = JSON.parse(str);
