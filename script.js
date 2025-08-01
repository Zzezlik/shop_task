const cart = [
    { name: "Молоко", price: 32, quantity: 2 },
    { name: "Хліб", price: 19, quantity: 1 },
    { name: "Сир", price: 85, quantity: 1 },
    { name: "Яйця", price: 27, quantity: 2 },
];

const calculateTotal = (price) => {
    // const totalValue = price.reduce( (acc, cur) => acc+cur)
    // console.log(totalValue)
    const percent = 10

    const totalPrice = price
        .map(value => Number(value.price * value.quantity))
        .reduce((acc, cur) => acc + cur)

    const howMuchInCart = price.length

    let result = howMuchInCart > 3
        ? totalPrice * (1-percent/100)
        : totalPrice
    // if(howMuchInCart > 3) {
    //     result = totalPrice*(1-percent/100)
    // }
    const aboveOne = price.map(item => {
        if (item.quantity >= 2) {
            console.log(`${item.name} - ${item.price}грн x${item.quantity} (${item.price * item.quantity}грн)`)
        }
    })
    // console.log(`До оплати: ${result.toFixed(2)}грн`)
    const sortedByPrice = [...price].sort((a, b) => a.price - b.price)
    const namePrice = sortedByPrice.map(i => {return `${i.name} - ${i.price}грн x${i.quantity} (${i.price * i.quantity}грн)`})

    console.log
    (`
           ЧЕК
    
---------------------------
${namePrice.join('\n')}
---------------------------
    
До оплати ${result.toFixed(2)}грн
    `)
}

// const prices = cart.map(item => Number(item.price))
calculateTotal(cart);