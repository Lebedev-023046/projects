import { ICars } from '../../interfaces/cars'
import { renderCar } from './renderCar'
import globalState from '../globalState/globalState'

export const renderMenu = () =>  `
    <div class="menu">
        <form action="" method="POST">
            <input class="input-text" type="text" placeholder="name"/>
            <input class="input-color" type="color"/>
            <input class="btn" type="submit" value="create">
        </form>
        <form action="" method="PUT">
            <input class="input-text" type="text" placeholder="name">
            <input class="input-color" type="color">
            <input class="btn" type="submit" value="update">
        </form>
        <div>
            <button class="btn">race</button>
            <button class="btn">reset</button>
            <button class="btn">generate cars</button>
        </div>
    </div>`


export const renderGarage = () => `
    ${renderMenu()}
    <div class="cars-view">
        <h1 class="garage-items">Garage #${globalState.carsCount}</h1>
        <h2 class="page-number">Page  #${1}</h2>
        <ul class="garage-list">
            ${globalState.cars.map(((elem: ICars) => `
                <li>${renderCar(elem)}</li>
            `))}
        </ul>
    </div>
    `

