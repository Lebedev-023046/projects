import { animationListeners } from "./componentListeners/animationListeners/animationListeners";
import { garageListeners } from "./componentListeners/carListeners/carListeners";
import { footerListeners } from "./componentListeners/footerListeners/footerListeners";
import { headerListeners } from "./componentListeners/headerListeners/headerListeners";
import { menuListeners } from "./componentListeners/menuListeners/menuListeners";
import { raceListeners } from "./componentListeners/raceLIsteners/raceLIsteners";

export const listeners = (): void => {
    garageListeners()
    menuListeners()
    headerListeners()
    footerListeners()
    animationListeners()
    raceListeners()
}