import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';
import noUiSlider from 'nouislider';
import { IJson } from '../../types/index'

const slider_year = <HTMLElement>document.querySelector(".slider__year")
const slider_quantity = <HTMLElement>document.querySelector(".slider__quantity")

export const brandButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.brand__item')
export const sizeButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.size__item')
export const colorButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.color__item')
export const popularButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.popular-checkbox')

export const filterByValues = (rawData: Array<IJson>) => {
    let byBrand = filterByBrand(rawData)
    let bySize = filterBySize(byBrand)
    let byColor = filterByColor(bySize)
    let byPopular = filterByPopular(byColor)
    return byPopular
}

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

export const filterByBrand = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let brandArr = filterСriterias(brandButtons)
    if (brandArr.length > 0) {
        for (let i=0; i<brandArr.length;i++) {
            let fData = data.filter(elem => elem.brand.toLowerCase().includes(brandArr[i].toLowerCase()))
            fData.forEach(element => res.push(element))
        }
        return res
    }
    else return data
}

export const filterBySize = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let sizeArr = filterСriterias(sizeButtons)
    if (sizeArr.length > 0) {
        for (let i=0; i<sizeArr.length;i++) {
            let fData = data.filter(elem => elem.size.includes(Number(sizeArr[i])))
            fData.forEach(element => res.push(element))
        }
        return res
    }
    else return data
}

export const filterByColor = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let colorArr = filterСriterias(colorButtons)
    if (colorArr.length > 0) {
        for (let i=0; i<colorArr.length;i++) {
            let fData = data.filter(elem => elem.color.includes((colorArr[i])))
            fData.forEach(element => res.push(element))
        }
        return res
    }
    else return data
}

export const filterByPopular = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let popularArr = filterСriterias(popularButtons)
    if (popularArr.length > 0) {
        let fData = data.filter(elem => elem.popular === 'yes')
        fData.forEach(element => res.push(element))
        return res
    }
    else return data
}

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




