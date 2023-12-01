/*

*/
const staggeredCaps = (string) => {
  let caps = true;
  return [...string].reduce((acc, curr) => {
    
    if (/[a-zA-Z]/.test(curr)) {
      if (caps) {
        caps = false;
        acc += curr.toUpperCase();
      } else {
        caps = true;
        acc += curr.toLowerCase();
      }
    }
    else {
      acc += curr;
    }
    return acc;
  }, '')
}

console.log(staggeredCaps("ignore 77 the 444 numbers"));
