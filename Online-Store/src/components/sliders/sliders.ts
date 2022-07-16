import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import { data, renderByValues } from '../cards/cards';

// noUiSlider functionality
const slider_year = <HTMLElement>document.querySelector(".slider__year")
const slider_quantity = <HTMLElement>document.querySelector(".slider__quantity")

export const yearIns = noUiSlider.create(slider_year, {
    start: [2019, 2022],
    connect: true,
    range: {
        'min': 2019,
        'max': 2022
    },
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
        decimals: 0
    }),
});

export const quantityIns = noUiSlider.create(slider_quantity, {
    start: [0, 40],
    connect: true,
    range: {
        'min': 0,
        'max': 40
    },
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
        decimals: 0
    }),
});


(slider_year as noUiSlider.target).noUiSlider?.on('end', (): void => renderByValues());
(slider_quantity as noUiSlider.target).noUiSlider?.on('end', (): void => renderByValues());