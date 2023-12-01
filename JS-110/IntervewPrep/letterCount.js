/*
Input: string 
Output: object with lowerecase letter as key and occurenc of key as the value
create an object.
iteate thru the string 
if the current element doesnt exist in the object, add it to the object with a value of 1
if the current element does exist in the object, increment the keys value by one


*/

const letterCount = (s) => {
  return [...s].reduce((acc, curr) => {
    curr = curr.toLowerCase();
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}


console.log(letterCount("codewars"));
console.log(letterCount("activity"));
console.log(letterCount("arithmetics"));
console.log(letterCount("traveller"));
console.log(letterCount("daydreamer"));
