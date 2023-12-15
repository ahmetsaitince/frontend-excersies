// Print/log the numbers from 1 to 100
// For **multiples of three** print "Fizz" instead of the number
// For **multiples of five** print "Buzz"
// For numbers which are ** multiples of both three and five ** print "FizzBuzz".

let output = 1;
do {
  if (output % 3 == 0) {
    console.log('Fizz');
  } else if (output % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(output);
  }
  output++;
} while (output < 101);
