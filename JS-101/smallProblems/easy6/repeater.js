/*
initiate a new string, add the curr element 2x for each element. return new string
*/

const repeater = (string, i = 0, output = "") => {
  if (i === string.length) return output;
  const char = string[i] + string[i];
  output += char;
  return repeater(string, i + 1, output);
}
console.log(repeater("Hello"));