// *******************Question 1**************************
for (let pad = 1; pad <= 10; pad +=1) {
  console.log(" ".repeat(pad) + "The Flintstones Rock!");
}
// ********************Question 2*******************
let munstersDescription = "The Munsters are creepy and spooky.";
console.log(munstersDescription.split("").map(el => {
  if (el === el.toUpperCase()) {
    return el.toLowerCase();
  } else {
    return el.toUpperCase();
  }
}).join(""));
// ****************Question 3****************************
const factors = (number, divisor = number, nums = []) => {
  if (divisor === 0) return nums;

  if (number % divisor === 0) {
    nums.push(number / divisor);
  }

  return factors(number, divisor - 1, nums);
};
console.log(factors(10));
// ***************Question 4******************************
console.log("array.concat doesn't mutate the input array");
// ******************Question 5*************************
console.log('floating point numbers yield unexpected results');
// *******************Question 6******************************
console.log('to test for NaN use the Number.isNaN() method');
// *************************Question 7**********************
console.log(42 - 8); // answer is a shadow to the input in the function its never mutated.
// ***********************Question 8********************************
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
} console.log('Spot is in trouble. The function will mutate the data in the object');
// ***********************Question 9*********************************
