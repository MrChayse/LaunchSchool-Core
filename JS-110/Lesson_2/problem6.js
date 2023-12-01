/*
input an object
output the console.log method on each name age and gender in the object.
iterage thru the object to access each key.
each keys value is an object. 
the name age and gender are also keys. i can use the Object.keys method to access them
use the template literal format to concat all values in the log method to the console.
*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let key in munsters) {
  let keys = Object.values(munsters[key]);
  console.log(`${key} is a ${keys[0]}-year-old ${keys[1]}.`);
}