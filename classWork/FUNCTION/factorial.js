//// FACTORIAL
function factorial(x) {
    let res = 1
    for (let i = 1; i <= x; i++) {
        res *= i
    }
    return res
}
console.log(factorial(5));