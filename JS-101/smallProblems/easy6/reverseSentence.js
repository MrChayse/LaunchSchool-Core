/*
create an empty string variable

*/
const reverse = (string) => {
  return string.split(' ').reverse().join(' ');
}
console.log(reverse("Hello World"));
