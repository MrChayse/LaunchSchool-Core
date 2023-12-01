function integerToString(number) { 
  let arr = [];
  arr.unshift(number % 10) 
 
  while ( number - arr[0] ) {
   number = (number - arr[0]) / 10; 
   arr.unshift( number % 10 ) 
  } 
  return arr.join('');
 }
console.log(integerToString(569));