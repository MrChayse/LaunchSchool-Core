const runningTotal = (arr) => {
  return arr.reduce((acc, curr) => {
    const lastTotal = acc.length === 0 ? 0 : acc[acc.length - 1];
    acc.push(lastTotal + curr);
    return acc;
  }, []);
};

console.log(runningTotal([14, 11, 7, 15, 20]));
