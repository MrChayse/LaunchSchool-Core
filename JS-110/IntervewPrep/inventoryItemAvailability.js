/*
Input: item number, array of transactions
Output: true/ false on whether or not the item is available.
Algorithm:
iterate thru the array of objects.
place all of the objects that contain the item number as the value for the key 'id' 
if the value for the movement key is 'in' add the value of the quantity to a count variable
if the value for the movement key is 'out' subtract the value of the quantity key from the count
  variable.
if the value of the count variable is greater than 0 return true, else return false.
Code:
use the transactions for function to find all transactions for the item input.
use the reduce method to iterate thru the array of values the transactionsFor function produces
  and keep a running total for the quantity in / out.
if the value for the movement key for the current element is 'in' add the value of the quantity key.
if not, subtract the value of the quantity key
return the accumulated total after iteration is complete.
return whether or not the returned value is greater than 0.


*/
const transactionsFor = (item, list) => list.filter(curr => curr.id === item);
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

const isItemAvailable = (item, list) =>
  transactionsFor(item, list).reduce((acc, curr) => acc + (curr.movement === 'in' ? curr.quantity : -curr.quantity), 0) > 0;
                   
console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));
