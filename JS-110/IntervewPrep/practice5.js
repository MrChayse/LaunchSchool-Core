/*
Input: String
Output: The letter with least occurrence within the string
consider uppercase and lowercase versions to be the same.
if there is a tie, the letter with the lowest index is returned.
Algorithm:
split the input string into an array of letters.
declare a letters object initialized to the value of an empty object
iterate thru the input string.
if the element exists in the object increment it's value by 1.
if the element doesnt exist in the object, place it as a key in the object
  and initialize the value to 1.
once incrementation is complete determine which key has the lowest value.
if there is a tie, return the value with the lowest index value.
*/

const leastCommonChar = (string) => {
  const strObj = string.split('').reduce((acc, curr) => {
    acc[curr.toLowerCase()] = (acc[curr.toLowerCase()] || 0) + 1;
    return acc;
  }, {});
  
  let minFrequency = Infinity;
  let leastCommonChar = null;

  for (let [char, frequency] of Object.entries(strObj)) {
    frequency < minFrequency ? [minFrequency = frequency, leastCommonChar = char] : [minFrequency, leastCommonChar];
  }
  return leastCommonChar;
}

console.log(leastCommonChar("Hello World"));
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers"));
console.log(leastCommonChar("Mississippi"));
console.log(leastCommonChar("Happy birthday!"));
console.log(leastCommonChar("aaaaaAAAA"));