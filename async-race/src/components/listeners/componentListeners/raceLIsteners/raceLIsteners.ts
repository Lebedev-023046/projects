import { createWinner, getCar } from '../../../api/api';
import { renderWinnerTime } from '../../../renderUI/garage/renderGarage';
import { getIdxes, updateWinnerState } from '../../utils';
import { renderSortedView } from '../winnerListeners/winnerListenersFuncs';
import { startRaceCars, stopRaceCars } from './raceLIstenersFuncs';

const body = document.querySelector('body');

export const raceListeners = (): void => {
    if (body instanceof HTMLElement) {
        body.addEventListener('click', async (event: MouseEvent) => {
            if (event.target instanceof Element) {
                if (event.target.classList.contains('race-btn')) {
                    stopRaceCars(await getIdxes());
                    const idxes = await getIdxes();
                    let results = [];
                    for (let i = 0; i < idxes.length; i++) {
                        let promise = startRaceCars(idxes[i]);
                        results.push(promise);
                    }
                    const resultsCarsArr = await Promise.all(results);
                    const winner = resultsCarsArr.filter((car) => car.success).sort((a, b) => a.time - b.time)[0];
                    renderWinnerTime((await getCar(winner.id)).name, winner.time);
                    await createWinner({ id: winner.id, wins: 1, time: winner.time / 1000 });
                    await updateWinnerState();
                    renderSortedView('time');
                }
                if (event.target.classList.contains('reset-btn')) {
                    const idxes = await getIdxes();
                    stopRaceCars(idxes);
                }
            }
        });
    }
};
