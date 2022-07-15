import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';
import noUiSlider from 'nouislider';
import { IJson } from '../../types/index'
import { data, renderCards } from '../cards/cards'

const slider_year = <HTMLElement>document.querySelector(".slider__year")
const slider_quantity = <HTMLElement>document.querySelector(".slider__quantity")

const brandBlock = <HTMLElement>document.querySelector('.purpose__choices-brand')
const brandButtons = <NodeListOf<Element>>document.querySelectorAll('.brand__item')
const sizeBlock = <HTMLElement>document.querySelector('.purpose__choices-size')
const sizesBlock = <NodeListOf<Element>>document.querySelectorAll('.size__item')
const colorBlock = <HTMLElement>document.querySelector('.purpose__choices-color')
const popularBlock = <HTMLElement>document.querySelector('.purpose__choices-popular')


brandBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('brand__item')) {
            event.target.classList.toggle('purpose-button__item_active')
        }
        filterByBrand(data)
    }
})

sizeBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('size__item')) {
            sizesBlock.forEach(element => element.classList.remove('size__radio_active'))
            event.target.classList.toggle('size__radio_active')
        }
    }
})

colorBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('color__item')) {
            event.target.classList.toggle('color__item_active')
        }
    }
})

popularBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('popular-checkbox')) {
            event.target.classList.toggle('popular-checkbox_active')
        }
    }
})



// noUiSlider functionality
noUiSlider.create(slider_year, {
    start: [2019, 2022],
    connect: true,
    range: {
        'min': 2019,
        'max': 2022
    },
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
        decimals: 0
    })
});

noUiSlider.create(slider_quantity, {
    start: [0, 40],
    connect: true,
    range: {
        'min': 0,
        'max': 40
    },
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
        decimals: 0
    })
});


const filterСriterias = (relevantButtons: NodeListOf<Element>) => {
    const relevantValues: string[] = Array.from(brandButtons)
                                            .filter((btn) => btn.classList.contains('purpose-button__item_active'))
                                            .map((btn) => btn.innerHTML)
    return relevantValues
    }

const filterByBrand = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let brandArr = filterСriterias(brandButtons)
    if (brandArr.length>0) {
        for (let i=0; i<brandArr.length;i++) {
            let fData = data.filter(elem => elem.brand.toLowerCase().includes(brandArr[i].toLowerCase()))
            fData.forEach(element => res.push(element))
        }
    renderCards(res)
    }
    else {
        renderCards(data)
    }
}




