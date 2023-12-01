/*
Input: an array of objects.
Output: an array of only the transactions for the specified inventory item.
Algorithm: 
create an output array.
iterate over the input array.
if the current element has a key id that matches the item input, push this element to the output array
*/

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

                     
const transactionsFor = (item, list) => list.filter(curr => curr.id === item);


console.log(transactionsFor(101, transactions));