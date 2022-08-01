import './styles/main.scss'
import { renderWinners } from  './components/winners/winners'

const toWinners = document.querySelector('.toWinners')
const toGarage = document.querySelector('.toGarage')
toWinners?.addEventListener('click', renderWinners)