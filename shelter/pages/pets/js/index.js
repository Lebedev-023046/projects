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
    console.log(event.target.localName)
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

const cardsBlock = document.querySelector(".cards").children
const petsName = document.querySelectorAll(".name")

// console.log(leftArrow)
// console.log(rightArrow)

const renderCards = () => {
    fetch("../../../../shelter/static/pets.json")
        .then((response) => {
            return response.json()
        })
        .then(data => {
            Array.from(cardsBlock).forEach((element, index) => {
                element.style.backgroundImage = `url(${data[index].img[1]})`
            })
            petsName.forEach((element, index) => {
                element.textContent = data[index].name
            })

        })
}

renderCards()


// =========  CAROUSEL REALISATION  =========