import { styles } from "../../style/index.js"

const primaryText = document.createElement('p')
primaryText.innerText = 'Agency'
Object.assign(primaryText.style, styles.text.primary)

const secondaryText = document.createElement('p')
secondaryText.innerText =  'Creative'
Object.assign(secondaryText.style, styles.text.secondary)

const wrapText = document.createElement('section')
Object.assign(wrapText.style, styles.text.wrap)
wrapText.appendChild(primaryText)
wrapText.appendChild(secondaryText)

export const text = wrapText