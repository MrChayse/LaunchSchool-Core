/*
make string an array
access each element of the array of strings
if the element length property is greater than or equal to 5
split the element, reverse the order of the element, join the element
  push the element to the output array.
if the element length is less than 5 just push it to the output array.
return output array with join method invoked.
*/
const reverse = (string) => {
  string = string.split(' ');
  output = string.reduce((acc, curr) => {
    if (curr.length >= 5) {
      curr = curr.split('').reverse().join('');
    }
    acc.push(curr);
    return acc;
  }, [])
  return output.join(' ');
}
console.log(reverse("Walk around the block"));