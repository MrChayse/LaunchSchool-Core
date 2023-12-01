const swap = (str, i = 0, output = []) => {
  const strArr = str.split(' ');
  if (i === strArr.length) return output.join(' ');
  let char = strArr[i];
  char = char[char.length - 1] + char.slice(1, -1) + char[0];
  output.push(char);
  return swap(str, i + 1, output);
}
console.log(swap('Hi my name is Chayse'));
