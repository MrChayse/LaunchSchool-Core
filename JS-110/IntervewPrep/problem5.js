/*
Input: string
Output: returns the character that occurs least often.If a tie, return the letter that appears first

create an empty object 
iterate thru the string.
if the current element is not in the object, place it in the object as a key with the value of an 
  array. the first element is the count, the second element of the array is the index of the letter
if it is already in the object, increment the count by one
return the key with the smallest count value, if there is a tie, return the key that occured has the 
  lowest index value.
*/

const leastCommonChar = (string) => {
  let min = Infinity;
  const stringObj = [...string].reduce((acc, curr) => {
    curr = curr.toLowerCase();
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {})

  const output =  Object.entries(stringObj).reduce((acc, [key, value]) => {
    return value < acc[1] ? [key, value] : acc;
  }, [null, Infinity]);
  
  console.log(output[0]);
  return output[0]
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');