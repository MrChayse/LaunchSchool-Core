/*
convert number to a string
create variables for the part of the number unchanged and the part of the 
  number that does change
rotate the part that does change
concat the number that doesnt change with the part that was rotated
convert rotated number to number and return
*/

const rotateRightmostDigits = (number, count) => {
  const stringNum = String(number);
  const rotatedPart = stringNum.slice(-count);
  const remainingPart = stringNum.slice(0, -count);

  const rotatedStringNum = rotatedPart.slice(1) + rotatedPart[0];
  return Number(remainingPart + rotatedStringNum);
};


console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 4));