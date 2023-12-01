/*
string at 0 is uppercase, odds are lowercase, evens are uppercase, if a 
  number just add it in and don't increment the count
*/

const staggeredCase = (string) => {
  return [...string].map((el, index) => index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));
