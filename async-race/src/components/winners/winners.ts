import { IWinners } from '../../interfaces/winners'
// import { renderHF } from '../garage/garage'

const body = document.querySelector('body')

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

export async function renderWinners(){
    const main = document.querySelector('.main')
    const responce: Response = await fetch('http://127.0.0.1:3000/winners')
    const data: IWinners[] = await responce.json()
    let htmlWinners: string =  `
    <div class "wrapper">
        <div class "winners-number">Winners #${data.length}</div>
        <div class "pages-number">Page  #${1}</div>
        <table class="winners-table">
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
        </table>
    </div>
    `
    if (main instanceof HTMLElement) {
        main.innerHTML = `${htmlWinners}`
    }
}


