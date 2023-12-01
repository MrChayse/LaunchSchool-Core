let str = 'The grass is green';
let output = "";
let i = str.indexOf('g');
while (str[i] !== " ") {
  output += str[i];
  i += 1;
}
console.log(output);