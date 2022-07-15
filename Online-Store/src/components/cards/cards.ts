import { IJson } from '../../types/index'
import json from '../../assets/index.json'

let data = json

const cards = <HTMLElement>document.querySelector('.cards')
const modal = <HTMLElement>document.querySelector('.cards__modal')

const cross = <HTMLDivElement>document.querySelector('.search__cancel')
const input = <HTMLInputElement>document.querySelector('.search__input')

const sortBy = <HTMLInputElement>document.querySelector('.sorting')

const renderCards = (data: Array<IJson>) => {
    cards.innerHTML = ''
    if (data.length > 0) {
        modal.classList.remove('cards__modal_active')
        data.forEach(element => {
            let card = document.createElement('div')
            let card__photo = document.createElement('div')
            let card__info = document.createElement('div')
        
            card.classList.add('card')
            card__photo.classList.add('card__photo')
            card__info.classList.add('card__info')
        
            card__photo.style.backgroundImage = `url(${element.img})`
            card__info.innerHTML = `Name:     ${element.name}<br> 
                                    Color:    ${element.color}<br> 
                                    Sizes:    ${[element.size]}<br> 
                                    Price:    ${element.price} BYN<br>
                                    Brand:    ${element.brand} <br>
                                    Year:     ${element.year}<br> 
                                    Popular:  ${element.popular}<br>
                                    Quantity: ${element.quantity}<br>`
        
            card.appendChild(card__photo)
            card.appendChild(card__info)
            cards.appendChild(card)
        })
    }else {
        modal.classList.add('cards__modal_active')
    }
}

renderCards(data)

// search-bar functionality
cross.addEventListener('click', () => {
    input.value = ''
    renderCards(data)
})

// search by input
input.addEventListener('input', () => {
    let filteredData: Array<IJson> = data.filter(element => Object.values(element).some(elem => {
        if (typeof(elem) === 'string' && !elem.match(/\.(jpe?g|png|gif)$/i)) {
            return elem.toLowerCase().includes(<string>input.value.toLowerCase())
        } 
    }))
    // const keys: Array<string> = ['name', 'color', 'collection', 'popular', 'brand'] 
    // let filteredData: Array<IJson> = data.filter(el => keys.some((key: string) => {
    //         return el[key].toLowerCase().includes(input.value.toLowerCase())
    // }))
    renderCards(filteredData)
})

// search by sort
sortBy.addEventListener('change', () => {
    let filteredData = data;
    let value = sortBy.value;
    if (value === 'asc') filteredData = data.sort((a, b) => a.quantity - b.quantity)
    else if (value === 'desc') filteredData = data.sort((a, b) => b.quantity - a.quantity)
    else if (value === 'nameUp') {
        filteredData = data.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            return 0
        })
    }
    else if (value === 'nameDn') {
        filteredData = data.sort((a, b) => {
            if (b.name.toLowerCase() < a.name.toLowerCase()) return -1
            if (b.name.toLowerCase() > a.name.toLowerCase()) return 1
            return 0
        })
    }
    renderCards(filteredData)
})

//cart counting
cards.addEventListener('click', (event: MouseEvent) => {
    let amount = document.querySelector('.amount')
    if (event.target instanceof HTMLDivElement && event.target.parentNode instanceof HTMLDivElement) {
        if ((amount)) {
            if (event.target.parentNode.classList.contains('card')) {                           
                if (event.target.parentNode.classList.contains('card_active')) {
                    event.target.parentNode.classList.remove('card_active')
                    amount.innerHTML = String(Number(amount?.innerHTML) - 1)
                }
                else {
                    if (Number(amount.innerHTML) > 15) {
                        alert('Sorry all slots are full')
                    }
                    else {
                        event.target.parentNode.classList.add('card_active')
                        amount.innerHTML = String(Number(amount?.innerHTML) + 1)
                    }
                }
            }
        }
    }
})




// const getSettings = () => {
//     let relevantSettings: Array<ISettings> = Object.values(settings).filter(element => {
//         return Boolean(element) && Array.from(element).length > 0
//     })
// }



