const stringToInteger = (string) => {
  const DIGITS = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  };
  
  return string.split('').reduce((acc, curr) => {
    return (acc * 10) + DIGITS[curr];
  }, 0);
};

console.log(stringToInteger("4321"));