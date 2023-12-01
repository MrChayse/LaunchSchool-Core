const interLeave = (arr1, arr2, i = 0) => {
  const output = [arr1[i], arr2[i]];
  if (i === arr1.length - 1) return output;
  return output.concat(interLeave(arr1, arr2, i + 1));
}
console.log(interLeave([1, 2, 3], ['a', 'b', 'c']));
