import globalState from '../../globalState/globalState';
import { renderCarImg } from '../garage/renderCar';

const winners = (): string[] => {
    let winnersArr: string[] = [];
    globalState.winners.forEach((elem, index) => {
        if (elem.car) {
            winnersArr.push(`
            <tr>
                <td>${index + 1}</td>
                <td>${elem.id}</td>
                <td class="winners-car-img" valign="bottom">${renderCarImg(elem.car.color)}</td>
                <td>${elem.car.name}</td>
                <td>${elem.wins}</td>
                <td>${Number(elem.time)}</td>
            </tr>
            `);
        }
    });
    return [...winnersArr];
};

export let renderWinners = (): string => `
    <div class "wrapper">
        <h1 class "winners-number">Winners (${globalState.winnersCount})</h1>
        <h2 class "pages-number">Page  #${globalState.winnersPage}</h2>
        <table class="winners-table">
            <thead>
                <tr>
                    <th>Number</th>
                    <th class="id">Id ↓</th>
                    <th>Car</th>
                    <th>Name</th>
                    <th class="winners">Wins ↓</th>
                    <th class="time">Best time (seconds) ↓</th>
                </tr>
            </thead>
            <tbody>
            ${winners()}
            </tbody>
        </table>
    </div>
    `;
