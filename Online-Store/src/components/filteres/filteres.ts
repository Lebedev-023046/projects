import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';
import noUiSlider from 'nouislider';
import { IJson } from '../../types/index'
import { data, renderCards } from '../cards/cards'

const slider_year = <HTMLElement>document.querySelector(".slider__year")
const slider_quantity = <HTMLElement>document.querySelector(".slider__quantity")

const brandBlock = <HTMLElement>document.querySelector('.purpose__choices-brand')
const brandButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.brand__item')
const sizeBlock = <HTMLElement>document.querySelector('.purpose__choices-size')
const sizeButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.size__item')
const colorBlock = <HTMLElement>document.querySelector('.purpose__choices-color')
const colorButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.color__item')
const popularBlock = <HTMLElement>document.querySelector('.purpose__choices-popular')
const popularButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.popular-checkbox')


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
            event.target.classList.toggle('size__radio_active')
        }
        filterBySize(data)
    }
})

colorBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('color__item')) {
            event.target.classList.toggle('color__item_active')
        }
        filterByColor(data)
    }
})

popularBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('popular-checkbox')) {
            event.target.classList.toggle('popular-checkbox_active')
        }
        filterByPopular(data)
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


const filterСriterias = (relevantButtons: NodeListOf<HTMLElement>) => {
    // console.log(Array.from(relevantButtons).forEach(element => console.log(element)))
    const relevantValues: string[] = Array.from(relevantButtons)
                                            .filter((btn) => btn.classList.contains('purpose-button__item_active') ||
                                                             btn.classList.contains('size__radio_active') ||
                                                             btn.classList.contains('popular-checkbox_active') ||
                                                             btn.classList.contains('color__item_active'))
                                            .map((btn) => btn.innerHTML || <string>btn.dataset.color)
    return relevantValues
}

// const filterCriteriasColor = (relevantButtons: NodeListOf<HTMLElement>) => {
//     const relevantValues: string[] = Array.from(relevantButtons)
//                                             .filter((btn) => btn.classList.contains('purpose-button__item_active') ||
//                                                             btn.classList.contains('size__radio_active') ||
//                                                             btn.classList.contains('popular-checkbox_active'))
//                                             .map((btn) => btn.innerHTML)
//     return relevantValues
// }

const filterByBrand = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let brandArr = filterСriterias(brandButtons)
    if (brandArr.length > 0) {
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

const filterBySize = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let sizeArr = filterСriterias(sizeButtons)
    if (sizeArr.length > 0) {
        for (let i=0; i<sizeArr.length;i++) {
            let fData = data.filter(elem => elem.size.includes(Number(sizeArr[i])))
            fData.forEach(element => res.push(element))
        }
        renderCards(res)
    }
    else {
        renderCards(data)
    }
}

const filterByColor = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let colorArr = filterСriterias(colorButtons)
    console.log(colorArr)
    if (colorArr.length > 0) {
        for (let i=0; i<colorArr.length;i++) {
            let fData = data.filter(elem => elem.color.includes((colorArr[i])))
            fData.forEach(element => res.push(element))
        }
        renderCards(res)
    }
    else {
        renderCards(data)
    }
}

const filterByPopular = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let sizeArr = filterСriterias(popularButtons)
    if (sizeArr.length > 0) {
        let fData = data.filter(elem => elem.popular === 'yes')
        fData.forEach(element => res.push(element))
        renderCards(res)
    }
    else {
        renderCards(data)
    }
}




