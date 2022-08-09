import { drive, startEngine, stopEngine } from '../../../api/api';
import globalState from '../../../globalState/globalState';
import { animation, getDist } from '../../utils';

export const start = async (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
        const id: number = +event.target.id.split('start-engine-car-')[1];
        const car = <HTMLElement>document.getElementById(`car-${id}`);
        const flag = <HTMLElement>document.getElementById(`flag-${id}`);
        const { velocity, distance } = await startEngine(id);
        const time = Math.round(distance / velocity);
        const dist = getDist(car, flag);
        globalState.animation.id = animation(car, dist, time);
        const { success } = await drive(id);
        if (!success) {
            window.cancelAnimationFrame(globalState.animation.id.id);
        }
        return { success, id, time };
    }
};

export const stop = async (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
        const id: number = +event.target.id.split('stop-engine-car-')[1];
        await stopEngine(id);
        const car = <HTMLElement>document.getElementById(`car-${id}`);
        car.style.transform = 'translateX(0)';
        if (globalState.animation.id) window.cancelAnimationFrame(globalState.animation.id.id);
    }
};
