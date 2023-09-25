import { styles } from "../../style/index.js"

const img = document.createElement('img')
img.setAttribute('src', './assets/images/logo.png')

const wrapPicture = document.createElement('figure')
Object.assign(wrapPicture.style, styles.picture.wrap)
wrapPicture.appendChild(img)

export const picture = wrapPicture