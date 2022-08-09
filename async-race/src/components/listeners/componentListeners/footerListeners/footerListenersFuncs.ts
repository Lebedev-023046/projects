import globalState from "../../../globalState/globalState"
import { renderGarage } from "../../../renderUI/garage/renderGarage"
import { updateGarageState } from "../../utils"

export const prevPressBtn = async (): Promise<void> => {
    const garage = document.querySelector('.garage')
    if (garage instanceof HTMLElement) {
        if (globalState.garagePage > 1) {
            globalState.garagePage -= 1
            await updateGarageState()
            garage.innerHTML = renderGarage()
        }
    }
}
export const nextPressBtn = async (): Promise<void> => {
    const garage = document.querySelector('.garage')
    if (garage instanceof HTMLElement) {
        if (globalState.garagePage * 7 < Number(globalState.carsCount)) {
            globalState.garagePage += 1
            await updateGarageState()
            garage.innerHTML = renderGarage()
        }
    }
}

