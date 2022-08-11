import globalState from '../../../globalState/globalState';
import { renderGarage } from '../../../renderUI/garage/renderGarage';
import { renderWinners } from '../../../renderUI/winners/renderWinners';
import { updateGarageState, updateWinnerState } from '../../utils';

export const prevPressBtn = async (): Promise<void> => {
    const garage = document.querySelector('.garage');
    const winners = document.querySelector('.winners');
    if (garage instanceof HTMLElement && winners instanceof HTMLElement) {
        if (garage.style.display === 'block') {
            if (globalState.garagePage > 1) {
                globalState.garagePage -= 1;
                await updateGarageState();
                garage.innerHTML = renderGarage();
            }
        } else {
            if (globalState.winnersPage > 1) {
                globalState.winnersPage -= 1;
                await updateWinnerState();
                winners.innerHTML = renderWinners();
            }
        }
    }
};
export const nextPressBtn = async (): Promise<void> => {
    const garage = document.querySelector('.garage');
    const winners = document.querySelector('.winners');
    if (garage instanceof HTMLElement && winners instanceof HTMLElement) {
        if (garage.style.display === 'block') {
            if (globalState.garagePage * 7 < Number(globalState.carsCount)) {
                globalState.garagePage += 1;
                await updateGarageState();
                garage.innerHTML = renderGarage();
            }
        } else {
            if (globalState.winnersPage * 7 < Number(globalState.winnersCount)) {
                globalState.winnersPage += 1;
                await updateWinnerState();
                winners.innerHTML = renderWinners();
            }
        }
    }
};
