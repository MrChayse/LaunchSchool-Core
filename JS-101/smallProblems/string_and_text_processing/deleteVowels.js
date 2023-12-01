/*

*/

// const removeVowels = (arr) => {
//   return arr.map(el => el.replace(/[aeiou]/gi, ''));
// }
const removeVowels = (arr, i = 0, output = []) => {
  if (i === arr.length) return output;

  output.push(arr[i].replace(/[aeiou]/gi, ''));
  return removeVowels(arr, i + 1, output);
}

console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]




