/*
create a queue array to store opening parentheses
if the iteration is a closing parentheses pop a value from the queue.
if the iteration is over and the queue is empty return true.
*/

// const isBalanced = (string, stack = [], i = 0) => {
//  while (i < string.length) {
//   if (string[i] === '(') {
//     stack.push(string[i]);
//   } else if (string[i] === ')') {
//     stack.pop();
//   }
//   i +=1;
//  }
//  return stack.length === 0;  
// }

const isBalanced = (string, i = 0, openCount = 0) => {
  if (i === string.length) return openCount === 0;

  if (string[i] === '(') {
    return isBalanced(string, i + 1, openCount + 1);
  }
  else if (string[i] === ')') {
    return openCount > 0 ? isBalanced(string, i + 1, openCount - 1) : false;
  }
  return isBalanced(string, i + 1, openCount);
};
console.log(isBalanced("((What (is this))?") === false);
console.log(isBalanced("((What) (is this))?") === true);