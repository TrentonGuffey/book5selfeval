import { getEntrees, getPurchases, getSides, getVeggies } from "./database.js"

const buildOrderListItem = (order) => {
    const veggies = getVeggies()
    const entrees = getEntrees()
    const sides = getSides()

const foundEntree = entrees.find((entree) => {
    return entree.id === order.entreeId
})

const foundVeggie = veggies.find((veggie) => {
    return veggie.id === order.veggieId
})

const foundSide = sides.find((side) => {
    return side.id === order.sideId
})

const total = foundEntree.price + foundVeggie.price + foundSide.price

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Sales = () => {
    const sales = getPurchases()
    return `
        <ul>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>
    `
}

