/*
odd number that is divisible by 7. digit occurs once each.
*/

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toNextMultipleOf7(number);

  while (featuredNum <= MAX_FEATURED) {
    if (isFeatured(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14; // Increment by 14 to ensure both odd and divisible by 7.
  }

  return 'There is no possible number that fulfills those requirements.';
}

function toNextMultipleOf7(number) {
  const remainder = number % 7;
  if (remainder === 0) {
    return number + 7; // Next multiple of 7.
  } else {
    return number + (7 - remainder); // Adjust to the next multiple of 7.
  }
}

function isFeatured(number) {
  const digits = String(number).split('');
  const seen = {};

  for (let digit of digits) {
    if (seen[digit]) {
      return false; // Digits are not unique.
    }
    seen[digit] = true;
  }

  return true; // All digits are unique.
}


console.log(featured(20));   // 21
console.log(featured(997));  // 1029
console.log(featured(1029)); // 1043


