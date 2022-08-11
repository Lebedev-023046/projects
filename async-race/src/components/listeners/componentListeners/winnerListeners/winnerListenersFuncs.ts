import globalState from '../../../globalState/globalState';
import { renderWinners } from '../../../renderUI/winners/renderWinners';
import { updateWinnerState } from '../../utils';

export const renderSortedView = async (sortBy: string) => {
    globalState.order = globalState.order === 'asc' ? 'desc' : 'asc';
    globalState.sort = sortBy;
    await updateWinnerState();
    const winners = document.querySelector('.winners');
    if (winners instanceof HTMLElement) {
        winners.innerHTML = renderWinners();
    }
};
