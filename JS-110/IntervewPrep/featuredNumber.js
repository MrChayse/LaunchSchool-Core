/*
Input: a number
Output: The next number that is a "featured Number"
Algorithm:
A "Featured Number" is:
  An odd number that is a multiple of 7
  All digits only occurr 1 time.
determine if the input number is a featured number.
if this is true, add 14 to the input number and return this value.
if this is not true, get the remainder of the divided by 7, rounded down.
  subtract this number from the input number. Check if this is a featured number.
  if this is true, add 14 and check if this is a featured number. 
  if this is false, add 7 and check if this is a featured number.
return the featured number.
*/
const validNum = (num) => {
  if (num % 2 !== 0 && num % 7 === 0) {
    const numArr = num.toString().split('');
    return numArr.length === numArr.filter((el, index, arr) => arr.indexOf(el) === index).length;
  }
  return false;
};


const featured = (num) => {
  if (num >= 9876543201) return "That's just not possible!"
  if (validNum(num)) return num + 14;
  let modifiedNum = num - (num % 7);
  modifiedNum = validNum(modifiedNum) ? modifiedNum + 14 : modifiedNum + 7;

  while (!validNum(modifiedNum)) {
    modifiedNum += 7;
  }
  return modifiedNum;
};


console.log(featured(12)); // 21
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));

// let num1 = 147;
// let num2 = 77;
// console.log(validNum(num1));
// console.log(validNum(num2));

