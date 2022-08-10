import { drive, getCars, startEngine, stopEngine } from "../../../api/api";
import globalState from "../../../globalState/globalState";
import { animation, getDist, getIdxes } from "../../utils";


export const startRaceCars = async (id: number) => {
    const car = <HTMLElement>document.getElementById(`car-${id}`);
    const flag = <HTMLElement>document.getElementById(`flag-${id}`);
    const { velocity, distance } = await startEngine(id);
    const time = Math.round(distance / velocity);
    const dist = getDist(car, flag);
    globalState.animation.id = animation(car, dist, time);
    const { success } = await drive(id);
    if (!success) {
        window.cancelAnimationFrame(globalState.animation.id.id);
    }else {
        if (time < globalState.winnerTime) {
            globalState.winnerTime = time
        } 
    }
    return { success, id, time };
}

export const stopRaceCars = async (idxes: number[]) => {
    for (let i=0;i<idxes.length;i++) {
        stopEngine(idxes[i]);
        const car = <HTMLElement>document.getElementById(`car-${idxes[i]}`);
        car.style.transform = 'translateX(0)';
        if (globalState.animation.id) window.cancelAnimationFrame(globalState.animation.id.id);
    }
    console.log(globalState.winnerTime)
}


const getFastestTime = async () => {
    const idxesArr = await getIdxes()
    let result = []
    for (let i=0;i<idxesArr.length;i++) {
        startEngine(idxesArr[i]);
        const { success } = await drive(idxesArr[i])
        result.push([success, idxesArr[i]])

    }
    console.log(result)
}

// getFastestTime()