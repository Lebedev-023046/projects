//alert("Я не успел доделать popup и pagination, поэтому прошу тебя проверить работу в среду в течение дня")

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
        if (document.body.scrollWidth < 767) body.classList.toggle("body-scroll")
        headerContainerBurger.classList.remove("header-container-burger")
    }
    else if (tagList.includes(event.target.localName)) {
        navigation.classList.remove("open")
        hamburger.classList.remove("open-icon")
        headerContainerBurger.classList.remove("header-container-burger")
        if (document.body.scrollWidth < 767) body.classList.toggle("body-scroll")
    }
}

addEventListener("click", closeBurger)


// =========  PET'S RENDER  =========

const cardsBlock = document.querySelectorAll(".card")
const petsName = document.querySelectorAll(".name")

async function renderCardsBG(){
    let response = await fetch("../shelter/assets/static/pets.json")
    if (response.ok) {
        let data = await response.json()
        console.log(data)
            cardsBlock.forEach((element, index) => {
            element.style.backgroundImage = `url(${data[index].img[0]})`
            })
            petsName.forEach((element, index) => {
                element.textContent = data[index].name
            })
    }
}

renderCardsBG()

// =========  CAROUSEL REALISATION   =========

const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const carousel = document.querySelector(".cards-items")

const ITEM_LEFT = document.querySelector(".item-left")
const ITEM_CENTER = document.querySelector(".item-center")
const ITEM_RIGHT = document.querySelector(".item-right")

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
    let dataCenterList = []

    // Array.from(ITEM_CENTER.children).forEach(element => dataCenterList.push(element.dataset.number))
    // console.log(dataCenterList)
    while (true) {
        if (petsList.length === 3) break
        else {
            let card = Array.from(cardsBlock)[Math.floor(Math.random() * 7)]
            let innerCard = Array.from(cardsBlock)[Math.floor(Math.random() * 7)].outerHTML
            Array.from(ITEM_CENTER.children).forEach(element => dataCenterList.push(element.dataset.number))
            // console.log(card.dataset.number)
            // console.log(ITEM_CENTER.children.item(0).dataset.number)
            // console.log(ITEM_CENTER.children.item(0).dataset.number === card.dataset.number)
            
            // console.log(dataCenterList.includes(card.dataset.number))
            // console.log(petsList.includes(innerCard))
            // console.log(innerCard)
            if (petsList.includes(innerCard)) continue
            else if (dataCenterList.includes(card.dataset.number)) continue
            else petsList.push(innerCard)
            // console.log(Array.from(ITEM_CENTER.children).includes(card))
        }
        // console.log(card)
        // console.log(Array.from(ITEM_CENTER.firstChild))
        // console.log(Array.from(ITEM_CENTER.children).includes(card))
    }

    // console.log(petsList)

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
    let response = await fetch("../shelter/assets/static/pets.json")
    let classes = ["card", "button-lm", "name"]
    if (response.ok) {
        let data = await response.json()
        console.log(event.target.classList)
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
                cardBG.style.backgroundImage = `url(${data[event.target.dataset.number-1].img[0]})`
            }catch{}
        }
    }
}


addEventListener("click", renderCard)







