var m = +prompt("Enter first number:");
var n = +prompt("Enter second number:");
var result = 1;

if (m>n) {
    m = +prompt("First number must be greater than second.\n Enter first number:");
    n = +prompt("Enter second number:");    
}
    for (let i = m; i <= n; i++) {
        if(i % 2 !== 0) {
            result *= i;
        }
    }

console.log(`Product of odd numbers from ${m} to ${n} = ${result}`)