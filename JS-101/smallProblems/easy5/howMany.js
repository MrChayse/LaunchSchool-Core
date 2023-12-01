/*
go thru array. if the vehicles object doesnt contain the element, assign
the element as a key initialized to the value of 1. if the element does exist
increment the value by 1
*/
const frequency = (arr, vehicles = {}, i = 0) => {
  const el = arr[i];
  if (i === arr.length) return vehicles;

  vehicles[el] ? vehicles[el] +=1 : vehicles[el] = 1;
  return frequency(arr, vehicles, i + 1);
}
let toys = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];
console.log(frequency(toys));