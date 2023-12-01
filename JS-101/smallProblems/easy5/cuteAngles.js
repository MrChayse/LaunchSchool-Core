// ° - degrees ' - minutes " - seconds| 60min = 1 degree | 60 sec = 1 min
// const DEGREE = '\xB0';
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

// const cuteAngles = (deciNum) => {
//   let numDegree = Math.floor(deciNum);
//   console.log(numDegree);
//   let minutes = Math.floor((deciNum - numDegree) * MINUTES_PER_DEGREE);
//   console.log(minutes);
//   let seconds = Math.floor(
//     (deciNum - numDegree - (minutes /MINUTES_PER_DEGREE)) *
//     SECONDS_PER_DEGREE
//   );
//   console.log(seconds);
//     return String(numDegree) + DEGREE + padZeroes(minutes) + "'" +
//                                         padZeroes(seconds) + '"';
// }

// const padZeroes = (number) => {
//   let numString = String(number);
//   return numString.length < 2 ? ('0' + numString) : numString;
// }

// console.log(cuteAngles(254.6));
// console.log(cuteAngles(93.034773));

function dms(angle) {
  let degrees = Math.floor(angle);
  // console.log(degrees + "degrees.");
  let minutes = Math.floor((angle - degrees) * 60);
  // console.log(minutes + " minutes.");
  let seconds = Math.floor(((angle - degrees) * 60 - minutes) * 60);
  // console.log(seconds + " seconds.");
  return `${degrees}°${minutes}'${seconds}"`;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
