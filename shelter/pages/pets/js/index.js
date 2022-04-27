// =========  HAMBURGER  =========

const hamburger = document.querySelector(".hamburger")
const navigation = document.querySelector(".nav-list")
const logo = document.querySelector(".logo")
const headerContainerBurger = document.querySelector(".header-container")
const logoAnimation = document.querySelector(".header-container-burger")

const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open")
    hamburger.classList.toggle("open-icon")
    logo.classList.toggle("logo-burger")
    headerContainerBurger.classList.toggle("header-container-burger")
    body.classList.toggle("body-scroll")
    // logoAnimation.style.WebkitAnimationName = 'animation-in'
    // logoAnimation.style.nimationName = 'animation-in'
})

const closeBurger = (event) => {
    const tagList = ['header', 'section', 'h2', 'h3', 'div', 'p', 'article']
    if (event.target.classList.contains("nav-link")) {
        navigation.classList.remove("open")
        hamburger.classList.remove("open-icon")
        body.classList.toggle("body-scroll")
        headerContainerBurger.classList.remove("header-container-burger")
        // logoAnimation.style.WebkitAnimationName = 'animation-out'
        // logoAnimation.style.nimationName = 'animation-out'
    }
    else if (tagList.includes(event.target.localName)) {
        navigation.classList.remove("open")
        hamburger.classList.remove("open-icon")
        headerContainerBurger.classList.remove("header-container-burger")
        body.classList.remove("body-scroll")
    }
}

addEventListener("click", closeBurger)


// =========  PET'S RENDER  =========

const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")

const cardsBlock = document.querySelectorAll(".card")
const petsName = document.querySelectorAll(".name")

async function renderCards(){

    let response = await fetch("../../../shelter/assets/static/pets.json")
    if (response.ok) {
        let data = await response.json()
            cardsBlock.forEach((element, index) => {
            element.style.backgroundImage = `url(${data[index].img[1]})`
            })
            petsName.forEach((element, index) => {
                element.textContent = data[index].name
            })
    }
}

renderCards()


// =========  POPUP REALISATION   =========

const cards = document.querySelectorAll('.card')
const popup = document.querySelector('.popup')
const cross = document.querySelector(".cross")
const saveBlock = document.querySelector(".save-block")

const openPopup = (event) => {
    let classes = ["card", "button-lm", "name"]
    if (classes.includes(String(event.target.classList))) {
        popup.classList.add('popup-open')
        body.classList.add('body-scroll')
        saveBlock.classList.add('save-block-open')
    }
}

const closePopup = (event) => {
    if (event.target.classList.contains("cross") || event.target.classList.contains("save-block-open")) {
        popup.classList.remove('popup-open')
        body.classList.remove('body-scroll')
        saveBlock.classList.remove('save-block-open')
    }
}

addEventListener("click", openPopup)
addEventListener("click", closePopup)

const title = document.querySelector(".popup-title")
const subtitle = document.querySelector(".popup-subtitle")
const text = document.querySelector(".popup-text")
const age = document.querySelector(".age")
const inoculations = document.querySelector(".inoculations")
const diseases = document.querySelector(".diseases")
const parasites = document.querySelector(".parasites")
const cardBG = document.querySelector(".pet-img")

async function renderCard(event){
    let response = await fetch("../../../shelter/assets/static/pets.json")
    if (response.ok) {
        let data = await response.json()
        let classes = ["card", "button-lm", "name"]
        if (classes.includes(String(event.target.classList))) {
            let commonInfo = [title, subtitle, text, age, inoculations, diseases, parasites]
            commonInfo.forEach(element => element.innerHTML = '')
            cardBG.style.backgroundImage = ''
            try {
                title.innerHTML = data[event.target.dataset.number-1].name 
                subtitle.innerHTML = `${data[event.target.dataset.number-1].type} - ${data[event.target.dataset.number-1].breed}`
                text.innerHTML = data[event.target.dataset.number-1].description
                age.innerHTML += `<b>Age:</b> ${data[event.target.dataset.number-1].age}`
                inoculations.innerHTML += `<b>Inoculations:</b> ${data[event.target.dataset.number-1].inoculations}`
                diseases.innerHTML += `<b>Diseases:</b> ${data[event.target.dataset.number-1].diseases}`
                parasites.innerHTML += `<b>Parasites:</b> ${data[event.target.dataset.number-1].parasites}`
                cardBG.style.backgroundImage = `url(${data[event.target.dataset.number-1].img[1]})`
            }catch{}
        }
    }
}

addEventListener("click", renderCard)


// =========  PAGINATION REALISATION   =========

const LEFT_LEFT = document.querySelector(".left-left")
const LEFT = document.querySelector(".left")
const PAGE_NUMBER = document.querySelector(".page-number")
const RIGHT = document.querySelector(".right")
const RIGHT_RIGHT = document.querySelector(".right-right")

const CARDS = document.querySelector(".cards")

let pageNumber = Number(PAGE_NUMBER.textContent);
PAGE_NUMBER.textContent = pageNumber

// RENDER CARDARRAYS 

const cardBlockList = Array.from(cardsBlock)
let bigCardArray = []

if (document.body.scrollWidth > 1279) {
    for (i = 0; i < 6; i++) {
        let cardBlockListCopy = cardBlockList.slice(0)
        let smallCaddBlock = cardBlockListCopy.sort(() => Math.random() - 0.5)
        bigCardArray.push(smallCaddBlock)
    }
}
else if (document.body.scrollWidth > 767) {
    for (i = 0; i < 8; i++) {
        let cardBlockListCopy = cardBlockList.slice(0, 6)
        let smallCaddBlock = cardBlockListCopy.sort(() => Math.random() - 0.5)
        bigCardArray.push(smallCaddBlock)
    }
}
else if (document.body.scrollWidth >= 320) {
    for (i = 0; i < 16; i++) {
        let cardBlockListCopy = cardBlockList.slice(0)
        let smallCaddBlock = cardBlockListCopy.sort(() => Math.random() - 0.5)
        bigCardArray.push(smallCaddBlock)
    }
}

const newCards = (pageNumber) => {
    let cardsInner = '';
    if (document.body.scrollWidth > 1279) {
        for (i=0;i<8;i++) {
            cardsInner += bigCardArray[pageNumber-1][i].outerHTML
        }
        CARDS.innerHTML = cardsInner
    }
    else if (document.body.scrollWidth > 767) {
        for (i=0;i<6;i++) {
            cardsInner += bigCardArray[pageNumber-1][i].outerHTML
        }
        CARDS.innerHTML = cardsInner
    }
    else if (document.body.scrollWidth > 320) {
        for (i=0;i<3;i++) {
            cardsInner += bigCardArray[pageNumber-1][i].outerHTML
        }
        CARDS.innerHTML = cardsInner
    }
}

let activeList;

if (document.body.scrollWidth > 1279) {
    activeList = [2, 3, 4, 5]
}
else if (document.body.scrollWidth > 767) {
    activeList = [2, 3, 4, 5, 6, 7]
}
else if (document.body.scrollWidth > 320) {
    activeList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
}

if (pageNumber < 2) {
    pageNumber = 1
    LEFT_LEFT.classList.add("left-left-inactive")
    LEFT.classList.add("left-inactive")
}

const paginationClick = (event) => {

    let pageNumber = Number(PAGE_NUMBER.textContent);
    PAGE_NUMBER.textContent = pageNumber

    //enter right
    if (event.target.classList.contains("right")) {
        pageNumber += 1
        if (pageNumber > bigCardArray.length) {
            pageNumber = bigCardArray.length
            newCards(pageNumber)
        } 
        if (pageNumber === bigCardArray.length) {
            RIGHT_RIGHT.classList.add("right-right-inactive")
            RIGHT.classList.add("right-inactive")
            newCards(pageNumber)
        }
        PAGE_NUMBER.textContent = pageNumber

        if (activeList.includes(Number(PAGE_NUMBER.textContent))) {
            RIGHT_RIGHT.classList.remove("right-right-inactive")
            RIGHT.classList.remove("right-inactive")
            LEFT_LEFT.classList.remove("left-left-inactive")
            LEFT.classList.remove("left-inactive")
            newCards(pageNumber)
        }
    }

    //enter left
    if (event.target.classList.contains("left")) {
        pageNumber -= 1
        if (pageNumber < 1) {
            pageNumber = 1
            newCards(pageNumber)
        } 
        if (pageNumber === 1) {
            LEFT_LEFT.classList.add("left-left-inactive")
            LEFT.classList.add("left-inactive")
            newCards(pageNumber)
        }
        PAGE_NUMBER.textContent = pageNumber
        if (activeList.includes(Number(PAGE_NUMBER.textContent))) {
            RIGHT_RIGHT.classList.remove("right-right-inactive")
            RIGHT.classList.remove("right-inactive")
            LEFT_LEFT.classList.remove("left-left-inactive")
            LEFT.classList.remove("left-inactive")
            newCards(pageNumber)
        }
    }

    //enter right-right
    if (event.target.classList.contains("right-right")) {
        pageNumber = bigCardArray.length
        PAGE_NUMBER.textContent = pageNumber
        RIGHT_RIGHT.classList.add("right-right-inactive")
        RIGHT.classList.add("right-inactive")
        LEFT_LEFT.classList.remove("left-left-inactive")
        LEFT.classList.remove("left-inactive")
        newCards(pageNumber)
    }

    //enter left-left
    if (event.target.classList.contains("left-left")) {
        pageNumber = 1
        PAGE_NUMBER.textContent = pageNumber
        RIGHT_RIGHT.classList.remove("right-right-inactive")
        RIGHT.classList.remove("right-inactive")
        LEFT_LEFT.classList.add("left-left-inactive")
        LEFT.classList.add("left-inactive")
        newCards(pageNumber)
    }
}

addEventListener("click", paginationClick)
