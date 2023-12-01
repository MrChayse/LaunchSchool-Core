/*
1. declare a function calculateLeftoverBlocks initialized with a single 
parameter blocks. blocks will represent the number of blocks provided to build 
a structure.
2. if block value is less than or equal to 1 i can return it's value.
3. If the block value is less than or equal to 4 i can subtract 1 from the 
block value to establish the top layer and return the block value.
4. if the block value is greater than 4, i can subtract 1 to get my top layer.
5. once the top layer is established, the next layer needs to be the layer 
number squared. if the block value is equal to or greater than the value of 
layer squared, i can establish another layer and subtract the squared value 
from the block value.
6. Once the layer value squared is greater than the block value, i can return 
the block value from the function. this is the amount i have left over.
*/

const calculateLeftoverBlocks = (blocks, layer = 1, layerBlocks = layer ** 2) => {
  if (layer === 1 && blocks <= 1) return 0;
  if (layerBlocks > blocks) return blocks;

  blocks -= layerBlocks;

  return calculateLeftoverBlocks(blocks, layer + 1, layerBlocks = (layer + 1) ** 2);
}

console.log(calculateLeftoverBlocks(0)); //true
console.log(calculateLeftoverBlocks(1)); //true
console.log(calculateLeftoverBlocks(2)); //true
console.log(calculateLeftoverBlocks(4)); //true
console.log(calculateLeftoverBlocks(5)); //true
console.log(calculateLeftoverBlocks(6)); //true
console.log(calculateLeftoverBlocks(14)); //true
