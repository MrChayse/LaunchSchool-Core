/*
create an object of nums with string values as values
create an outupt array
iterate thru the input array.
assign the arrays value the string version of the value push to output array
sort the converted output array using sort a - b.
return sorted array
*/
const alphaNumSort = (arr) => {
  const WORDS = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
    12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
    17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
  };
  let copy = arr.slice();

  return copy.sort((a, b) => WORDS[a] > WORDS[b] ? 1 : -1);
}

console.log(alphaNumSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));