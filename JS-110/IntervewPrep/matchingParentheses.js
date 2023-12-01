/*
Input: string
Output:True if parentheses are balanced, False, if they're not balanced.

Algorithm:
convert the string to an array of characters
filter the string for only parentheses can convert back to a string of parentheses.
iterate thru the parentheses
if the current value is an openeing parentheses increment a count variable.
if the current value is a closing parentheses decrement the count vairalbe.
return the boolean of comparing equality with the value of the count variable and 0.
*/

const isBalanced = (str, i = 0, count = 0) => {
  let newStr = [...str].filter(el => el === '(' || el === ')');
  if (newStr.length === 0) return true;
  if (i === str.length) return count === 0;

  if (newStr[i] === '(') {
    count += 1;
  } else if (newStr[i] === ')') {
    count -=1;
    if (count < 0) return false;
  }
  return isBalanced(newStr, i + 1, count);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);