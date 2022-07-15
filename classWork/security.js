let nom = prompt(`Номт чияй ?`)
let tie = confirm(`Галстук дори ?`)
let bag = confirm(`Сумка дори ?`)
let phone = confirm(`Телефон дори ?`)
let beard = confirm(`Ришта ба лезва гирифтай ?`)

if (tie && bag && phone && beard) {
    alert(`Hello ${nom}, Tie: ${tie}, Bag: ${bag}, Phone: ${phone}, Beard: ${beard}`)
    alert(`Welcome`)
}
else alert(`Hello ${nom}, Tie: ${tie}, Bag: ${bag}, Phone: ${phone}, Beard: ${beard}`)
alert(`Good bye`)
