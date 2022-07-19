import { IJson } from '../../types/index'
import json from '../../assets/index.json'
import { filterByValues, renderLS, softResetOn} from '../filteres/filteres'

const data = json

const cards = <HTMLElement>document.querySelector('.cards__container')
const modal = <HTMLElement>document.querySelector('.cards__modal')
const cross = <HTMLDivElement>document.querySelector('.search__cancel')
const brandBlock = <HTMLElement>document.querySelector('.purpose__choices-brand')
const sizeBlock = <HTMLElement>document.querySelector('.purpose__choices-size')
const colorBlock = <HTMLElement>document.querySelector('.purpose__choices-color')
const popularBlock = <HTMLElement>document.querySelector('.purpose__choices-popular')
const softReset = <HTMLElement>document.querySelector('.reset-filters')
const hardReset = <HTMLElement>document.querySelector('.reset-settings')

export const sortBy = <HTMLInputElement>document.querySelector('.sorting')
export const input = <HTMLInputElement>document.querySelector('.search__input')

window.addEventListener('load', () => {
    renderLS()
    renderByValues()
})
   
let cardId: string = ''
let amount = document.querySelector('.amount')
let cardIdArr: string[] = []

if (localStorage.getItem('cartCountArrId')) cardIdArr = localStorage.getItem('cartCountArrId')?.split(',') as string[]
if (localStorage.getItem('cartCount') && (amount)) amount.innerHTML = localStorage.getItem('cartCount') as string

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

// reset filters
softReset.addEventListener('click', () => {
    softResetOn()
    renderByValues()
})
// resrt settings
hardReset.addEventListener('click', () => {
    Array.from(cards.children).forEach(elem => elem.classList.remove('card_active'))
    cardIdArr = []
    if (amount) amount.innerHTML = '0'
    sortBy.value = '0'
    input.value = ''
    localStorage.clear()
    softResetOn()
    renderByValues()
})


// search by sort
sortBy.addEventListener('change', () => {
    let filteredData = filterByValues(data, false)
    renderCards(filteredData)  
})

// search-bar functionality
cross.addEventListener('click', () => {
    input.value = ''
    localStorage.setItem('input', input.value)
    renderByValues()
})

// search by input
input.addEventListener('input', () => {
    localStorage.setItem('input', input.value)
    renderByValues()
} )

//cart counting
cards.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLDivElement && event.target.parentNode instanceof HTMLDivElement) {
        if ((amount)) {
            if (event.target.parentNode.classList.contains('card')) {                           
                if (event.target.parentNode.classList.contains('card_active')) {
                    event.target.parentNode.classList.remove('card_active')
                    amount.innerHTML = String(Number(amount?.innerHTML) - 1)
                    localStorage.setItem('cartCount', amount?.innerHTML)
                    cardId = <string>event.target.parentNode.getAttribute('card-id')
                    cardIdArr.splice(cardIdArr.indexOf(cardId), 1)
                    localStorage.setItem('cartCountArrId', cardIdArr.toString())
                }
                else {
                    if (Number(amount.innerHTML) > 15) {
                        alert('Sorry all slots are full')
                    }
                    else {
                        event.target.parentNode.classList.add('card_active')
                        amount.innerHTML = String(Number(amount?.innerHTML) + 1)
                        localStorage.setItem('cartCount', amount?.innerHTML)
                        cardId = <string>event.target.parentNode.getAttribute('card-id')
                        cardIdArr.push(cardId)
                        localStorage.setItem('cartCountArrId', cardIdArr.toString())
                    }
                }
            }
        }
    }
})



