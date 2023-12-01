/*
create a new date object. The object is the year, month, day
initiate a for loop to loop thru the months of the year ( 0 - 11).
if each day that is th 13th and it's day of the week is 5(friday) push the
  day to the output array. return the output.length property.

*/

const fridayThe13ths = (year, output = []) => {
  for (let month = 0; month <= 11; month += 1) {
   output.push(new Date(year, month, 13));
  }
  return output.reduce((acc, curr) => {
    return curr.getDay() === 5 ? acc + 1 : acc;
  }, 0)
}

const unluckyDays = (year, month = 0, output = [], date) => {
  if (month > 11) return output;

  date = new Date(year, month, 13);
  if (date.getDay() === 5) output.push(date);
  return unluckyDays(year, month + 1, output, date);
}

console.log(unluckyDays(1986));
console.log(unluckyDays(2015));
console.log(unluckyDays(2017));
console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));