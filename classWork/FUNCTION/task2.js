//// DASHED BAYNI ELEM EVEN
function evenSpace(x) {
    let x2 = ""
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0 && x[i + 1] % 2 == 0) {
            x2 += x[i] + "-"
        }
        else { x2 += x[i] }
    }
    return x2
}
console.log(evenSpace("025468"));