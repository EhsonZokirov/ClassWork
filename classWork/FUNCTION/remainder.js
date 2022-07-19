//// Remainder
function remainder(a, b, c, d) {
    let res = 0
    for (let i = a; i <= b; i++) {
        if (i % d == c) {
            console.log(i);
        }
    }
}
remainder(2, 5, 1, 2)