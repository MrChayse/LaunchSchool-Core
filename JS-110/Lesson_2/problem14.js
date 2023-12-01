/*
input: obj
output: array containing the colors of fruits, sizes of vegetables
  sizes should be uppercase, colors should be capitalized.
  since the value of each key is another object with all of the data i need, i can 
    use the Object values method to get an array of all of the objects.
  use the map method to create an array for each element in the arr of values.
  if the current instance of map has a type value of fruit i will need to invoke another
    map function to access each value in the array and invoke the capitalize 
    function on it. 
  If the current instance is not a type value of fruit, i know i can just 
  access the size value and invoke the toUppeCase method on it.
  Create a capitalize function to simplify capitalizing the first letter of 
  each element in the colors array.

*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

let objArr = Object.values(obj);
console.log(objArr);
let output = objArr.map((el) => {
  return el.type === 'fruit' ? el.colors.map((char) => char = capitalize(char)) : el.size.toUpperCase();
});

console.log(output);