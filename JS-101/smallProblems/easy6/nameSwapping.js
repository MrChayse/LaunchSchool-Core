/*
split name into two names
reverse the order of the names
join the names back together seperated by a comma
*/

const swapName = (name) => {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Chayse Garrison'));
