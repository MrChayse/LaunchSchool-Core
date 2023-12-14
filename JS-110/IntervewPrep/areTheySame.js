/*
Input: arr1 and arr2
Output: boolean whether elements in arr2 are the elements in arr1 squared.
Algorithm:
check if every expression value in arr2 exists in arr1.
return true if so, false if no
Code:
invoke the every method on arr1
invoke the includes method with the values of arr2 spread out as the argument
return value of this invocation.
*/

const comp = (arr1, arr2) => {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  const squaresArr1 = arr1.map(el => el * el).sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);

  return squaresArr1.every((el, index) => el === sortedArr2[index]);
};


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]));


