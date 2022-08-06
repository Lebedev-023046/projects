const body = document.querySelector('body')

export const headerListeners = () => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('to-garage')) {
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
                if (event.target.classList.contains('to-winners')) {
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
            }
        })
    }
}