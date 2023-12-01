/*
the first twwo numbers are 1.
each subsequent number is the sum of the previous two numbers

Input: a number indicating digits.
Output: An array of numbers returned by the finobacci sequence. 

Data Structures:

Algorithm:
input length will be how many digits is required to return
count how many numbers are in my fib sequence to establish how many numbers to get to the 
  desired length value.
if the length of the last number created is equal to the length value we are done. return the count
the fibonacci array will have the values 1 and 2 already place inside
the next value for the fib sequence is the sum of the last two values.
keep executing the fib sequence and pushing the values into the array
each time the next value is calculated, it will be converted to a string.
if the length of the string is equal to the input value (n). stop the sequence.
return the .

Code:
length is the input of how many digits i want 
count is initialized to 3 because i am have already calculated the first two numbers
  (1, and 2) of the fibonacci sequence.
num1 is the value of 1n to start the sequence.
num2 is the value of 2n to start the sequence.
if the value of num2 converted to a string length property is equal to the value of length
  return the count variable.
re-assign num1 the value of num2.
re-assign num2 the value of num1 + num2
recursively call the function incrementing the value of count by 1
*/

function fibIndexByLength(length, num1 = 1n, num2 = 2n, count = 3) { // start count at 3 because im starting with the 3rd number in the fib sequence
  if (String(num2).length >= length) {
    return count;
  }

  [num1, num2] = [num2, num1 + num2];

  return fibIndexByLength(length, num1, num2, count + 1);
}


console.log(fibIndexByLength(2n));
console.log(fibIndexByLength(3n));
console.log(fibIndexByLength(10n));
console.log(fibIndexByLength(16n));
console.log(fibIndexByLength(100n));
console.log(fibIndexByLength(1000n));
console.log(fibIndexByLength(10000n));
