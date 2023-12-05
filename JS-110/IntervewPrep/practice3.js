/*
Input: text
Output: the input string with every 4th characters in every other word converted
  to uppercase. other characters remain the same.
Algorithm:
convert the input string to an array of words.
if the element is an odd number index access this element.
iterate thru the selected element, each time the index of the element
  divided by 4 is 0, capitalize the element.
Once the array of strings is iterated thru, join back to a string and return
*/

const toWeirdCase = (text, i = 0) => {
  let output = text.split(' ');
  if (i === output.length) return output.join(' ');

  if (i % 2 !== 0) {
    output[i] = output[i].split('').map((letter, index) => {
    return letter = index % 4 === 3 ? letter.toUpperCase() : letter;
    }).join('');
  }

  return toWeirdCase(output.join(' '), i + 1);
}

// console.log(toWeirdCase('Lorem Ipsum is simply dummy text of the printing world'));
// console.log(toWeirdCase('It is a long established fact that a reader will be distracted'));
// console.log(toWeirdCase('aaA bB c'));
// console.log(toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious'));

