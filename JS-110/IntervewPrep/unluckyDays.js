/*
Input: year
Output: number representing the amount of friday the 13ths for the input year
Algorithm:
craete an array for all of the thirteenths.
create a new Date object by using a for loop, month is equal to 0. As long as
  month is less than 12 increment month. the new Date should be in the format
  the input year, month, 13
push this value on every iteration of the month variable within the loop.
create a count variable.
iterate thru the thirteenths array. if the day of the week was a friday, 
increment the count variabe by 1.
return the count variables value.
*/

const fridayThe13ths = (year) => {
  const thirteenths = [];
  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }
  return thirteenths.reduce((acc, curr) => {
    curr.getDay() === 5 ? acc += 1 : acc;
    return acc;
  }, 0);
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));