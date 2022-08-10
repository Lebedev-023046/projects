import { IAnimation } from '../../interfaces/animationId';
import { ICars } from '../../interfaces/cars';
import { getCars } from '../api/api';
import globalState from '../globalState/globalState';

const carNames = ['Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Lada', 'Mazda', 'Toyota', 'Volkswagen'];

const models = ['Polo', 'Golf', 'Passat', 'A8', 'A6', 'Sportback', 'Q5', 'X5', 'X3', 'Transit'];

export const updateGarageState = async (): Promise<void> => {
    const { items, count } = await getCars(globalState.garagePage);
    globalState.cars = items;
    globalState.carsCount = count;
};

export const newCarBody = (): ICars => {
    const body: ICars = {
        name: (document.querySelector('.input-text-create') as HTMLInputElement).value,
        color: (document.querySelector('.input-color-create') as HTMLInputElement).value,
    };
    return body;
};

export const updateCarBody = (): ICars => {
    const body: ICars = {
        name: (document.querySelector('.input-text-update') as HTMLInputElement).value,
        color: (document.querySelector('.input-color-update') as HTMLInputElement).value,
    };
    return body;
};

export const insertCarData = (name: string, color: string): void => {
    ((document.querySelector('.input-color-update') as HTMLInputElement).value = color),
        ((document.querySelector('.input-text-update') as HTMLInputElement).value = name);
};

export const getRandomName = (): string => {
    const name = carNames[Math.floor(Math.random() * carNames.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    return `${name} ${model}`;
};

export const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return `#${color}`;
};

export const animation = (car: HTMLElement, distance: number, animationTime: number): IAnimation => {
    let start: number;
    const state = {
        id: 0,
    };

    function step(timestamp: number) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const passed = Math.round(time * (distance / animationTime));
        car.style.transform = `translateX(${Math.min(passed, distance)}px)`;
        if (passed < distance) {
            state.id = window.requestAnimationFrame(step);
        }
    }
    state.id = window.requestAnimationFrame(step);
    return state;
}

export const getDist = (car: HTMLElement, flag: HTMLElement): number => {
    return flag.offsetLeft - car.offsetLeft + 100;
};

export const getIdxes = async () => {
    const { items } =  await getCars(globalState.garagePage)
    return items.map(elem => elem.id) as number[]
}


