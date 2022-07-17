import { IJson } from '../../types/index'
import json from '../../assets/index.json'
import { filterByValues, brandButtons, sizeButtons,  colorButtons, popularButtons} from '../filteres/filteres'
import { slidesReset } from '../sliders/sliders'

const data = json

const cards = <HTMLElement>document.querySelector('.cards__container')
const modal = <HTMLElement>document.querySelector('.cards__modal')
const cross = <HTMLDivElement>document.querySelector('.search__cancel')
const input = <HTMLInputElement>document.querySelector('.search__input')
const brandBlock = <HTMLElement>document.querySelector('.purpose__choices-brand')
const sizeBlock = <HTMLElement>document.querySelector('.purpose__choices-size')
const colorBlock = <HTMLElement>document.querySelector('.purpose__choices-color')
const popularBlock = <HTMLElement>document.querySelector('.purpose__choices-popular')
const sortBy = <HTMLInputElement>document.querySelector('.sorting')
const reset = <HTMLElement>document.querySelector('.reset-filters')

let cardIdArr: string[] = []
let cardId: string = ''

const renderCards = (data: Array<IJson>): void => {
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
            console.log(cardIdArr)
            card.setAttribute('card-id', element.id)
            if (cardIdArr.includes(element.id)) card.classList.add('card_active')
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

const sortByValue = (data: Array<IJson>, reset=false) => {
    let filteredData: Array<IJson> = []
    if (reset) filteredData = data 
    else filteredData = filterByValues(data)
    
    let value = sortBy.value
    if (value === 'asc') filteredData = filteredData.sort((a, b) => a.quantity - b.quantity)  
    else if (value === 'desc') filteredData = filteredData.sort((a, b) => b.quantity - a.quantity) 
    else if (value === 'nameUp') {
        filteredData = filteredData.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            return 0
        })
    }
    else if (value === 'nameDn') {
        filteredData = filteredData.sort((a, b) => {
            if (b.name.toLowerCase() < a.name.toLowerCase()) return -1
            if (b.name.toLowerCase() > a.name.toLowerCase()) return 1
            return 0
        })
    }
    return filteredData
}

export const renderByValues = (): void => {
    let filteredData = filterByValues(data)
    renderCards(filteredData)
}

brandBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('brand__item')) {
            event.target.classList.toggle('purpose-button__item_active')
        }
        renderByValues()
    }
})

sizeBlock.addEventListener('click', (event: MouseEvent) => {
    sizeButtons.forEach(element => element.classList.remove('size__radio_active'))
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('size__item')) {
            event.target.classList.toggle('size__radio_active')
        }
        renderByValues()
    }
})

colorBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('color__item')) {
            event.target.classList.toggle('color__item_active')
        }
        renderByValues()
    }
})

popularBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('popular-checkbox')) {
            event.target.classList.toggle('popular-checkbox_active')
        }
        renderByValues()
    }
})

// reset functionality
reset.addEventListener('click', () => {
    let filteredData = sortByValue(data, true)
    Array.from(brandButtons).forEach(elem => elem.classList.remove('purpose-button__item_active'))
    Array.from(sizeButtons).forEach(elem => elem.classList.remove('size__radio_active'))
    Array.from(colorButtons).forEach(elem => elem.classList.remove('color__item_active'))
    Array.from(popularButtons).forEach(elem => elem.classList.remove('popular-checkbox_active'))
    slidesReset()
    renderCards(filteredData)
})

// search by sort
sortBy.addEventListener('change', () => {
    let filteredData = sortByValue(data, false)
    renderCards(filteredData)  
})

renderCards(data)

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
                    cardId = <string>event.target.parentNode.getAttribute('card-id')
                    cardIdArr.splice(cardIdArr.indexOf(cardId), 1)
                }
                else {
                    if (Number(amount.innerHTML) > 15) {
                        alert('Sorry all slots are full')
                    }
                    else {
                        event.target.parentNode.classList.add('card_active')
                        amount.innerHTML = String(Number(amount?.innerHTML) + 1)
                        cardId = <string>event.target.parentNode.getAttribute('card-id')
                        cardIdArr.push(cardId)
                        console.log(cardIdArr)
                    }
                }
            }
        }
    }
})




