// export const renderHF = () => {
//     const body = document.querySelector('body')
//     if (body instanceof HTMLElement) {
//         body.innerHTML =  renderHeader() + renderFooter()
//     }
// }

export const renderMenu = () => {
    const main = document.querySelector('.main')
    let mainHTML = `
    <div class="menu">
        <div>
            <input class="input-text" type="text" placeholder="name"/>
            <input class="input-color" type="color"/>
            <button class="btn">create</button>
        </div>
        <div>
            <input class="input-text" type="text" placeholder="name">
            <input class="input-color" type="color">
            <button class="btn">update</button>
        </div>
        <div>
            <button class="btn">race</button>
            <button class="btn">reset</button>
            <button class="btn">generate cars</button>
        </div>
    </div>`

    if (main instanceof HTMLElement) {
        main.innerHTML = `${mainHTML}`
    }
}


const renderCars = () => {

}

renderCars()