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
        .map(value => Number(value.price))
        .reduce((acc, cur) => acc + cur)

    const howMuchInCart = price.map(item => item.price).length

    let result = howMuchInCart > 3
        ? totalPrice * (1-percent/100)
        : totalPrice
    // if(howMuchInCart > 3) {
    //     result = totalPrice*(1-percent/100)
    // }
    console.log(`До оплати: ${result.toFixed(2)}`)
}
// const prices = cart.map(item => Number(item.price))
calculateTotal(cart);