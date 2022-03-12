var m = 1;
var n = 5;
var result = 1;

for (let i = m; i <= n; i++){
    if (i % 2 !== 0) {
        result *= i;
    }
} 
console.log(`Product of numbers from ${m} to ${n} = ${result}`)