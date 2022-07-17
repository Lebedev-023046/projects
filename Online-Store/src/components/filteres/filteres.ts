import { IJson } from '../../types/index'
import { yearIns, quantityIns} from '../sliders/sliders'
 
export const brandButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.brand__item')
export const sizeButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.size__item')
export const colorButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.color__item')
export const popularButtons = <NodeListOf<HTMLElement>>document.querySelectorAll('.popular-checkbox')

export const filterByValues = (rawData: Array<IJson>) => {
    let byBrand = filterByBrand(rawData)
    let bySize = filterBySize(byBrand)
    let byColor = filterByColor(bySize)
    let byPopular = filterByPopular(byColor)
    let byYear = filterByYear(byPopular)
    let byQuantity = filterByQuantity(byYear)

    return byQuantity
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

const filterByBrand = (data: Array<IJson>) => {
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

const filterBySize = (data: Array<IJson>) => {
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

const filterByColor = (data: Array<IJson>) => {
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

const filterByPopular = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let popularArr = filterСriterias(popularButtons)
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






