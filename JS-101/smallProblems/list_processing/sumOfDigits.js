/*
convert the number to a string
split the number into individual values
convert the values to a number and add them together
*/

const sum = (num) => {
  return String(num).split('').reduce((acc, curr) => acc + Number(curr), 0);
}
console.log(sum(496));
