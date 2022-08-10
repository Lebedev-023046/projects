import globalState from "../../../globalState/globalState"
import { getIdxes } from "../../utils"
import { startRaceCars, stopRaceCars } from "./raceLIstenersFuncs"

const body = document.querySelector('body')

export const raceListeners = (): void => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('race-btn')) {
                    const idxes = await getIdxes()
                    for (let i=0;i<idxes.length;i++) {
                        startRaceCars(idxes[i])
                    }
                }
                if (event.target.classList.contains('reset-btn')) {
                    const idxes = await getIdxes()
                    stopRaceCars(idxes)
                }
            }
        })
    }
}