import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

 document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVeggie(parseInt(event.target.value))
    }
}) 

export const Veggies = () => {
    let html = "<ul>"

    const listItems = veggies.map(veggie => {
        return `<li>
            <input type="radio" name="vegetable" value="${veggie.id}"/> ${veggie.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
