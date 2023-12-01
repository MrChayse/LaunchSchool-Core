/*
if input is not an array return undefine. (Array.isarray())
if the input is an empty array return the input.
the first element is the last element this will be a new array.
*/

const rotateArray = (array) => {
  if(!Array.isArray(array)) return undefined;

  if (array.length === 0) return array;
  return array.slice(1).concat(array[0]);
}

const arrayRotation = (arr) => {
  if (!Array.isArray(arr)) return undefined;

  return arr.map((el, index, array) => {
    return (index !== array.length - 1) ? array[index + 1] : array[0];
  });
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray(rotateArray([]))); 


console.log(arrayRotation([{ a: 2 }, [1, 2], 3]));
console.log(arrayRotation([1, 'a', 3, 'c']));
console.log(arrayRotation(([])));
