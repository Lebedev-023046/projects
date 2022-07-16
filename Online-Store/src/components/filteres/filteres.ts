import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';
import noUiSlider from 'nouislider';
import { IJson } from '../../types/index'
import { data, renderCards, filterByValues, renderByValues } from '../cards/cards'

const sortBy = <HTMLInputElement>document.querySelector('.sorting')

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

const reset = <HTMLElement>document.querySelector('.reset-filters')


brandBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('brand__item')) {
            event.target.classList.toggle('purpose-button__item_active')
        }
        renderByValues(data)
    }
})

sizeBlock.addEventListener('click', (event: MouseEvent) => {
    sizeButtons.forEach(element => element.classList.remove('size__radio_active'))
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('size__item')) {
            event.target.classList.toggle('size__radio_active')
        }
        renderByValues(data)
    }
})

colorBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('color__item')) {
            event.target.classList.toggle('color__item_active')
        }
        renderByValues(data)
    }
})

popularBlock.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('popular-checkbox')) {
            event.target.classList.toggle('popular-checkbox_active')
        }
        renderByValues(data)
    }
})

reset.addEventListener('click', () => {
    Array.from(brandButtons).forEach(elem => elem.classList.remove('purpose-button__item_active'))
    Array.from(sizeButtons).forEach(elem => elem.classList.remove('size__radio_active'))
    Array.from(colorButtons).forEach(elem => elem.classList.remove('color__item_active'))
    Array.from(popularButtons).forEach(elem => elem.classList.remove('popular-checkbox_active'))
    renderCards(data)
})


// search by sort
// export const sortByValue = () => {}
sortBy.addEventListener('change', () => {
    let filteredData = filterByValues(data)
    console.log(filteredData)
    let value = sortBy.value
    if (value === 'asc') {
        filteredData = filteredData.sort((a, b) => a.quantity - b.quantity)
    }  
    else if (value === 'desc') 
    {
        filteredData = filteredData.sort((a, b) => b.quantity - a.quantity)
    } 
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
    renderCards(filteredData)
    
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
    else {
        return data
    }
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
    else {
        return data
    }
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
    else {
        return data
    }
}

export const filterByPopular = (data: Array<IJson>) => {
    let res: Array<IJson> = []
    let popularArr = filterСriterias(popularButtons)
    if (popularArr.length > 0) {
        let fData = data.filter(elem => elem.popular === 'yes')
        fData.forEach(element => res.push(element))
        return res
    }
    else {
        return data
    }
}




