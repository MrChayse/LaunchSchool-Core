let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.reduce((acc, subArr) => {
    typeof subArr[0] === 'number' ? subArr.sort((a, b) => b - a) : subArr.sort().reverse();
    acc.push(subArr);
    return acc;
}, [])

console.log(newArr)