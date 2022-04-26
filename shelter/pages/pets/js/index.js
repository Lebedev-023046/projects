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
    const tagList = ['header', 'section', 'h2', 'h3', 'div', 'p', 'article']
    // console.log(event.target.localName)
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

const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")

const cardsBlock = document.querySelectorAll(".card")
const petsName = document.querySelectorAll(".name")

// console.log(leftArrow)
// console.log(rightArrow)


async function renderCards(){

    let response = await fetch("../../../shelter/assets/static/pets.json")
    if (response.ok) {
        let data = await response.json()
        // console.log(data)
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

//console.log(event.target.dataset.number) // element-id

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

addEventListener("click", renderCard)