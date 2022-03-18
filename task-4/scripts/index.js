function getSum(multiplier, ...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum * multiplier;
}

console.log(getSum(5, 1, 2, 3, 4))