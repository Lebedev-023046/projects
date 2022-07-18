import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import { IJson } from '../../types/index'
import { renderByValues } from '../cards/cards'
 
export const brandButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.brand__item')
export const sizeButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.size__item')
export const colorButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.color__item')
export const popularButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.popular-checkbox')

const slider_year = <HTMLElement>document.querySelector(".slider__year")
const slider_quantity = <HTMLElement>document.querySelector(".slider__quantity")

const filterСriterias = (relevantButtons: NodeListOf<HTMLElement>) => {
    const relevantValues: string[] = Array.from(relevantButtons)
                                            .filter((btn) => btn.classList.contains('purpose-button__item_active') ||
                                                             btn.classList.contains('size__radio_active') ||
                                                             btn.classList.contains('popular-checkbox_active') ||
                                                             btn.classList.contains('color__item_active'))
                                            .map((btn) => btn.innerHTML || <string>btn.dataset.color)
    return relevantValues
}

const filterByBrand = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let brandArr = filterСriterias(brandButtons)
    localStorage.setItem('brands', brandArr.toString())
    if (brandArr.length > 0) {
        for (let i=0; i<brandArr.length;i++) {
            let fData = data.filter(elem => elem.brand.toLowerCase().includes(brandArr[i].toLowerCase()))
            fData.forEach(element => res.push(element))
        }
        return res
    }
    else return data
}

const filterBySize = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let sizeArr = filterСriterias(sizeButtons)
    localStorage.setItem('sizes', sizeArr.toString())
    if (sizeArr.length > 0) {
        for (let i=0; i<sizeArr.length;i++) {
            let fData = data.filter(element => sizeArr.every(elem => element.size.includes(Number(elem))))
            fData.forEach(element => res.push(element))
        }
        return res
    }
    else return data
}

const filterByColor = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let colorArr = filterСriterias(colorButtons)
    localStorage.setItem('color', colorArr.toString())
    if (colorArr.length > 0) {
        for (let i=0; i<colorArr.length;i++) {
            let fData = data.filter(elem => elem.color.includes((colorArr[i])))
            fData.forEach(element => res.push(element))
        }
        return res
    }
    else return data
}

const filterByPopular = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let popularArr = filterСriterias(popularButtons)
    localStorage.setItem('popular', String(popularArr.length))
    if (popularArr.length > 0) {
        let fData = data.filter(elem => elem.popular === 'yes')
        fData.forEach(element => res.push(element))
        return res
    }
    else return data
}

const filterByYear = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let years = yearIns.get() as number[]
    if (data.length > 0) {
        let fData = data.filter(elem => elem.year >= years[0] && elem.year <= years[1])
        fData.forEach(element => res.push(element))
        return res
    }
    else return data
}

const filterByQuantity = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let quantity = quantityIns.get() as number[]
    if (data.length > 0) {
        let fData = data.filter(elem => elem.quantity >= quantity[0] && elem.quantity <= quantity[1])
        fData.forEach(element => res.push(element))
        return res
    }
    else return data
}

export const filterByValues = (rawData: Array<IJson>) => {
    // renderLS()
    let byBrand = filterByBrand(rawData)
    let bySize = filterBySize(byBrand)
    let byColor = filterByColor(bySize)
    let byPopular = filterByPopular(byColor)
    let byYear = filterByYear(byPopular)
    let byQuantity = filterByQuantity(byYear)

    return byQuantity
}



// sliders
const yearIns = noUiSlider.create(slider_year, {
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
    }),
});

const quantityIns = noUiSlider.create(slider_quantity, {
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
    }),
});

export const slidesReset = () => {
    yearIns.reset()
    quantityIns.reset()
}


(slider_year as noUiSlider.target).noUiSlider?.on('end', (): void => {
    localStorage.setItem('years', String(yearIns.get()))
    renderByValues()
});
(slider_quantity as noUiSlider.target).noUiSlider?.on('end', (): void => {
    localStorage.setItem('quantity', String(quantityIns.get()))
    renderByValues()
});

export const rangeLS = () => {
    let yearArrLS = localStorage.getItem('years')
    let quantityArrLS = localStorage.getItem('quantity')

    if (yearArrLS) {
        let yearArr = yearArrLS?.split(',').map(elem => +elem)
        yearIns.set(yearArr)
    }

    if (quantityArrLS) {
        let quantityArr = quantityArrLS?.split(',').map(elem => +elem)
        quantityIns.set(quantityArr)
    }
}





