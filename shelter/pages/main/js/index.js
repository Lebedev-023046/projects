// =========  HAMBURGER  =========

const hamburger = document.querySelector(".hamburger")
const navigation = document.querySelector(".nav-list")
const logo = document.querySelector(".logo")
const headerContainerBurger = document.querySelector(".header-container")

const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open")
    hamburger.classList.toggle("open-icon")
    logo.classList.toggle("logo-burger")
    headerContainerBurger.classList.toggle("header-container-burger")
    body.classList.toggle("body-scroll")
})

const closeBurger = (event) => {
    const tagList = ['header', 'section', 'h2', 'p', 'article']
    if (event.target.classList.contains("nav-link")) {
        navigation.classList.remove("open")
        hamburger.classList.remove("open-icon")
        body.classList.toggle("body-scroll")
        headerContainerBurger.classList.remove("header-container-burger")
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

const cardsBlock = document.querySelectorAll(".card")
const petsName = document.querySelectorAll(".name")

const renderCards = () => {
    fetch("../../../../shelter/static/pets.json")
        .then((response) => {
            return response.json()
        })
        .then(data => {
            cardsBlock.forEach((element, index) => {
                element.style.backgroundImage = `url(${data[index].img[0]})`
            })
            petsName.forEach((element, index) => {
                element.textContent = data[index].name
            })
        })
}

renderCards()


// =========  CAROUSEL REALISATION   =========

const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const carousel = document.querySelector(".cards-items")

const ITEM_LEFT = document.querySelector(".item-left")
const ITEM_CENTER = document.querySelector(".item-center")
const ITEM_RIGHT = document.querySelector(".item-right")

console.log(ITEM_LEFT)


const moveLeft = () => {
    carousel.classList.add("transition-left")
    rightArrow.removeEventListener("click", moveRight)
    leftArrow.removeEventListener("click", moveLeft)
}

const moveRight = () => {
    carousel.classList.add("transition-right")
    rightArrow.removeEventListener("click", moveRight)
    leftArrow.removeEventListener("click", moveLeft)
}

leftArrow.addEventListener("click", moveLeft)
rightArrow.addEventListener("click", moveRight)

if (document.body.scrollWidth > 767 && document.body.scrollWidth < 1280) {
    ITEM_LEFT.children[0].outerHTML = ''
    ITEM_CENTER.children[0].outerHTML = ''
    ITEM_RIGHT.children[0].outerHTML = ''
}

else if (document.body.scrollWidth > 320 && document.body.scrollWidth < 768) {
    ITEM_LEFT.children[Math.floor(Math.random()*2)].outerHTML = ''
    ITEM_CENTER.children[Math.floor(Math.random()*2)].outerHTML = ''
    ITEM_RIGHT.children[Math.floor(Math.random()*2)].outerHTML = ''
    ITEM_LEFT.children[Math.floor(Math.random()*2)].outerHTML = ''
    ITEM_CENTER.children[Math.floor(Math.random()*2)].outerHTML = ''
    ITEM_RIGHT.children[Math.floor(Math.random()*2)].outerHTML = ''
}

carousel.addEventListener("animationend", (animationEvent) => {
    let changeItem;
    const animationLeftList = ['move-left', 'move-left-1279', 'move-left-767']
    if (animationLeftList.includes(animationEvent.animationName)) {
        carousel.classList.remove("transition-left")
        carousel.classList.remove("transition-right")
        changeItem = ITEM_LEFT
        ITEM_CENTER.innerHTML = ITEM_LEFT.innerHTML
    }else {
        carousel.classList.remove("transition-right")
        carousel.classList.remove("transition-left")
        changeItem = ITEM_RIGHT
        ITEM_CENTER.innerHTML = ITEM_RIGHT.innerHTML
    }

    changeItem.innerHTML = ''

    let petsList = []
    while (true) {
        if (petsList.length === 3) break
        else {
            card = Array.from(cardsBlock)[Math.floor(Math.random() * 7)].outerHTML
            if (petsList.includes(card)) {
                continue
            }else {
                petsList.push(card)
            }
        }
    }

    const cardNumber = () => {
        if (document.body.scrollWidth > 1279) {
            for (i=0;i<3;i++) {
                changeItem.innerHTML += petsList[i]
            }
        }
        else if (document.body.scrollWidth > 767) {
            for (i=0;i<2;i++) {
                changeItem.innerHTML += petsList[i]
            }
        }
        else if (document.body.scrollWidth > 320) {
            changeItem.innerHTML += petsList[Math.floor(Math.random()*2)]
        }
    }

    cardNumber()

    rightArrow.addEventListener("click", moveRight)
    leftArrow.addEventListener("click", moveLeft)
})







