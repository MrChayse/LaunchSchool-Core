const letterPercentages = (str) => {
  const OUTPUT = {Lowercase: 0, Uppercase: 0, Other: 0};

    str.split('').forEach((el) => {
    if (el.toLowerCase() === el.toUpperCase()) OUTPUT.Other += 1;
    else if (el === el.toLowerCase()) OUTPUT.Lowercase += 1;
    else OUTPUT.Uppercase += 1;
  });

  for (let key in OUTPUT) OUTPUT[key] = ((OUTPUT[key] / str.length) * 100).toFixed(2);

    return OUTPUT;
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));