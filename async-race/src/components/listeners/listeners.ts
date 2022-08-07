import { garageListeners } from "./componentListeners/carListeners/carListeners";
import { footerListeners } from "./componentListeners/footerListeners/footerListeners";
import { headerListeners } from "./componentListeners/headerListeners/headerListeners";
import { menuListeners } from "./componentListeners/menuListeners/menuListeners";

export const listeners = () => {
    garageListeners()
    menuListeners()
    headerListeners()
    footerListeners()
}