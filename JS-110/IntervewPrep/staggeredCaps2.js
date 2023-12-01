/*
Input: string
Output: string with staggered caps.
non-alphabetic characters do not count 
Algorithm: s
split the string into an array of elements
iterate over the array of elements
create a variable initialized to a boolean value. If this variable is true, 
  use uppercase logic, else the value is opposite of true and use lowercase
  logic.
check to see if the current value is a letter.
if so use the boolean variable to determine the logic to use on the letter.
re-assing the boolean variable to the opposite of what it's current value.
if the current value is not a letter just return it.
Once iteration is complete, return the output array joined to a string.

Code:
initialize a cap variable to true.
inovke the split method on the input string, invoke the map method
  on this array of values.
use a regular expressino to capture a class of alphabetic characters a - z
  case insensitive. 
If the test method called by the regular expression on the current element
  is false just return the current element.
If true, check if cap is true or false. if true, invoke the toUpperCase method
  on the current element, if not invoke the .toLowerCase method on the current 
  element.
re-assign the value of the cap variable to it's opposite value.
Once iteration is complete invoke the join method on the array the map 
  method created to convert it to an array of words wiith the values 
  staggered accordingly.
*/

const staggeredCase = (string) => {
  let cap = true;
  return [...string].map((el) => {
    if (/[a-z]/i.test(el)) {
      el = cap ? el.toUpperCase() : el.toLowerCase();
      cap = !cap;
    }
    return el;
  }).join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
