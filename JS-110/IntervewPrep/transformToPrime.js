/*
Input: an array of numbers
Output: The smallest number to be inserted into the array so that the sum of all elements should
  equal the closest prime number.
prime number - number that is not divisible by 2 greater than 2 not divisible by 3, if number is greater
  than 5 check if the square root of the number is divisible by 5 or 7. increment by 6 to check if
    divisible by 2 or 3.

Algorithm:
add the input array elements together.
check if the sum is prime. if it is return 0, if not check if adding 1 to the value is prime.
if not keep adding 1 until the value is prime. 
return the value the increment reached to create a prime sum.
Code:
use the reduce method to calculate the sum of the input array elements.
if the sum is prime return 0
if the sum is not prime, increment the sum by 1 until the sum is a prime number.


*/


const minimumNumber = (nums) => {
  const isPrime = (num) => {
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0|| num % (i + 2) === 0) return false;
    } 
    return true;
  }
  let sum = nums.reduce((acc, curr) => acc + curr);
  let i = 1;
  let count = 0;
  while (!isPrime(sum)) {
    sum += i;
    count += 1;
  }
  return count;
}

console.log(minimumNumber([3,1,2]));
console.log(minimumNumber([5,2]));
console.log(minimumNumber([1,1,1]));
console.log(minimumNumber([2,12,8,4,6]));
console.log(minimumNumber([50,39,49,6,17,28]));