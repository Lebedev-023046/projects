import { IWinners } from '../../interfaces/winners'

const body = document.querySelector('body')

const wrapper = document.createElement('div')
const header = document.createElement('header')
const main = document.createElement('main')
const footer = document.createElement('footer')
const elems = [header, main, footer]
elems.forEach(elem => wrapper.appendChild(elem))
wrapper.classList.add('wrapper')
body?.appendChild(wrapper)

const winners = (data: IWinners[]): string[]  => {
    let winnersArr: string[] = []
    data.forEach((elem, index) => {
        winnersArr.push(`
        <tr>
            <td>${index + 1}</td>
            <td>Car</td>
            <td>${elem.id}</td>
            <td>${elem.wins}</td>
            <td>${elem.time}</td>
        </tr>
        `)
    })
    return [...winnersArr]
}

const renderHeader = () => {
    const toGarage = document.createElement('button')
    const toWinners = document.createElement('button')
    toGarage.innerHTML = 'To Garage'
    toWinners.innerHTML = 'To Winners'
    const btns = [toGarage, toWinners]
    btns.forEach((elem, index) => {
        elem.classList.add('btn')
        header.appendChild(elem)
        index === 0 ? elem.classList.add('toGarege') : elem.classList.add('toWinners')
        
    })
}

const renderFooter = () => {
    const prev = document.createElement('button')
    const next = document.createElement('button')
    prev.innerHTML = 'PREV'
    next.innerHTML = 'NEXT'
    const btns = [prev, next]
    btns.forEach(elem => {
        elem.classList.add('btn')
        footer.appendChild(elem)
    })
}

export async function renderWinners(){
    const responce: Response = await fetch('http://127.0.0.1:3000/winners')
    const data: IWinners[] = await responce.json()
    let html =  `
    <div>Winners #${data.length}</div>
    <div>Page  #${1}</div>

    <table>
        <thead>
            <tr>
                <th>Number</th>
                <th>Car</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Best time (seconds)</th>
            </tr>
        </thead>
        <tbody>
        ${winners(data)}
        </tbody>
    </table>`
    
    if (main instanceof HTMLElement) {
        main.innerHTML = html
    }
}



renderHeader()
renderFooter()