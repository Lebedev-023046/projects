import json from '../../assets/index.json'

const cards = <HTMLElement>document.querySelector('.cards')

const renderCards = () => {
    json.forEach(element => {
        let card = document.createElement('div')
        let card__photo = document.createElement('div')
        let card__info = document.createElement('div')
    
        card.classList.add('card')
        card__photo.classList.add('card__photo')
        card__info.classList.add('card__info')
    
        card__photo.style.backgroundImage = `url(${element.img})`
        card__info.innerHTML = `Name:    ${element.name}<br> 
                                Color:   ${element.color}<br> 
                                Sizes:   ${[...element.size]}<br> 
                                Price:   ${element.price} BYN<br>
                                Brand:   ${element.brand} 
                                Year:    ${element.year}<br> 
                                Popular: ${element.popular}<br>
                                Quantity: ${element.quantity}<br>`
    
        card.appendChild(card__photo)
        card.appendChild(card__info)
        cards.appendChild(card)
    })
}

renderCards()

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


