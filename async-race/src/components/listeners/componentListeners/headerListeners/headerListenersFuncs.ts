export const toGaragePressBtn = () => {
    const toGarage = document.querySelector('.to-garage')
    const toWinners = document.querySelector('.to-winners')
    const garage = document.querySelector('.garage')
    const winners = document.querySelector('.winners')
    if (toGarage instanceof HTMLElement && toWinners instanceof HTMLElement && garage instanceof HTMLElement && winners instanceof HTMLElement) {
        toGarage.setAttribute('disabled', 'true')
        garage.style.display = 'block'
        toWinners.removeAttribute('disabled')
        winners.style.display = 'none'
    }
}
export const toWinnersPressBtn = () => {
    const toGarage = document.querySelector('.to-garage')
    const toWinners = document.querySelector('.to-winners')
    const garage = document.querySelector('.garage')
    const winners = document.querySelector('.winners')
    if (toGarage instanceof HTMLElement && toWinners instanceof HTMLElement && garage instanceof HTMLElement && winners instanceof HTMLElement) {
        toWinners.setAttribute('disabled', 'true')
        winners.style.display = 'block'
        toGarage.removeAttribute('disabled')
        garage.style.display = 'none'

    }
}

