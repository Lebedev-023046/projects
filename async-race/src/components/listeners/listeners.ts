import { garageListeners } from "./componentListeners/carListeners/carListeners";
import { headerListeners } from "./componentListeners/headerListeners/headerListeners";
import { menuListeners } from "./componentListeners/menuListeners/menuListeners";

export const listeners = () => {
    garageListeners()
    menuListeners()
    headerListeners()
}