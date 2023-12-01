/*
convert the string to number
get string length
initialize a variable i string length
slice the number at i and add the the number to number at i 
concat with the string
return the numString converted to a Number type
*/

const maxRotation = (number) => {
  let numString = String(number);
  const LENGTH = numString.length;
  let numberStringArray = numString.split('');

  for (let i = 0; i < LENGTH - 2; i += 1) {
    numberStringArray = numStringArray.concat(numStringArray.splice(i, 1)[0]);
  }

  return Number(numStringArray.join(''));
};


let nums = [2, 4, 6, 8, 10, 12, 14, 16, 18];

console.log(nums.concat(nums.splice(0, 1)[0]));
