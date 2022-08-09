import { ICars } from '../../../interfaces/cars'
import { renderCar } from './renderCar'
import globalState from '../../globalState/globalState'


export const renderMenu = (): string =>  `
    <div class="menu">
        <div>
            <input required class="input-text-create" type="text" placeholder="name"/>
            <input class="input-color-create" type="color"/>
            <button class="btn create-btn">create</buttton>
        </div>
        <div>
            <input disabled class="input-text-update" type="text" placeholder="name">
            <input disabled class="input-color-update" type="color">
            <input disabled class="btn update-btn" data-id="" type="submit" value="update">
        </div>
        <div>
            <button class="btn race-btn">race</button>
            <button class="btn reset-btn">reset</button>
            <button class="btn generate-btn">generate cars</button>
        </div>
    </div>`

export const renderGarage = (): string => {
    return `${renderMenu()}
    <div class="cars-view">
        <h1 class="garage-items">Garage #${globalState.carsCount}</h1>
        <h2 class="page-number">Page  #${globalState.garagePage}</h2>
        <ul class="garage-list">
            ${globalState.cars.map(((elem: ICars) => `
                <li>${renderCar(elem)}</li>
            `))}
        </ul>
    </div>
    `
} 
