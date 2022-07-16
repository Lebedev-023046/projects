import { IJson } from '../../types/index'
import json from '../../assets/index.json'
import { filterByBrand, filterBySize, filterByColor, filterByPopular } from '../filteres/filteres' // returns filtered array

export const data = json

const cards = <HTMLElement>document.querySelector('.cards')
const modal = <HTMLElement>document.querySelector('.cards__modal')

const cross = <HTMLDivElement>document.querySelector('.search__cancel')
const input = <HTMLInputElement>document.querySelector('.search__input')

export const renderCards = (data: Array<IJson>): void => {
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

export const filterByValues = (rawData: Array<IJson>) => {
    let byBrand = filterByBrand(rawData)
    let bySize = filterBySize(byBrand)
    let byColor = filterByColor(bySize)
    let byPopular = filterByPopular(byColor)
    return byPopular
}

export const renderByValues = (rawData: Array<IJson>): void => {
    let byBrand = filterByBrand(rawData)
    let bySize = filterBySize(byBrand)
    let byColor = filterByColor(bySize)
    let byPopular = filterByPopular(byColor)
    renderCards(byPopular)
}

// search-bar functionality
cross.addEventListener('click', () => {
    input.value = ''
    let filteredData = filterByValues(data)
    renderCards(filteredData)
})

// search by input
input.addEventListener('input', () => {
    let filteredData = filterByValues(data)
    filteredData = filteredData.filter(element => Object.values(element).some(elem => {
        if (typeof(elem) === 'string' && !elem.match(/\.(jpe?g|png|gif)$/i)) {
            return elem.toLowerCase().includes(<string>input.value.toLowerCase())
        } 
    }))
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




