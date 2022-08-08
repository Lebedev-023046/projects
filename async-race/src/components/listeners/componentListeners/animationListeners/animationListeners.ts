import { startEngine } from "../../../api/api"
import { animation } from "../../utils"

const body = document.querySelector('body')

export const animationListeners = () => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof HTMLElement) {
                if (event.target.classList.contains('start-engine-button')) {
                    const id: number = +event.target.id.split('start-engine-car-')[1]
                    const { velocity, distance } = await startEngine(id)
                    const time = distance / velocity
                    animation(event.target, distance, time)
                }
            }
        })
    }
}