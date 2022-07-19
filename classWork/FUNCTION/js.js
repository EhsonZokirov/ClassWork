// function great() {
//     console.log(`Hello World`);
// }
// great();

// // parameter
// function great(a, b) {
//     console.log(a * b);
// }
// great(2 * 2);

////return
// function f(a, b) {
//     return (a + b);
// }
// console.log(f(2,2));

//// kalontarinsha jebs mekna
// function f(a, b) {
//     if (a > b) {
//         return a
//     }
//     else return b
// }
// console.log(f(5, 3));

//// task1
// function f(x) {
//     if (x > 0) {
//         return x += 1
//     }
//     else return x
// }
// console.log(f(5));

//// task 3
// function f(x) {
//     if (x > 0) {
//         return x += 1
//     }
//     else if (x < 0) {
//         return x -= 2
//     }
//     else return x = 10
// }
// console.log(f(-2));


///// kol-vo Positive, Negative
// function f(a, b, c) {
//     cnt = 0
//     cnt2 = 0
//     if (a > 0) {
//         cnt++
//     }
//     if (b > 0) {
//         cnt++
//     }
//     if (c > 0) {
//         cnt++
//     }
//     ///////////////////////////
//     if (a < 0) {
//         cnt2++
//     }
//     if (b < 0) {
//         cnt2++
//     }
//     if (c < 0) {
//         cnt2++
//     }

//     console.log(`
//      Positive: ${cnt}
//      Negative: ${cnt2}`);

// };

// f(9, -4, -5)

//// raqamoi jufta nishon meta
// function f(a, b) {
//     for (let i = a; i <= b; i++) {
//         if (i % 2 != 0) {
//             console.log(i)
//         }
//     }
// }
// f(1, 20);

function f(a, b) {
    let res = 0
    for (let i = a; i <= b; i++) {
        res += i
    }
    return res;
}
console.log(f(1, 5));