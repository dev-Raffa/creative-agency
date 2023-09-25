import { styles } from "./style/index.js"

export class Card extends HTMLElement {
  constructor(){
    super()

    this.shadow =  this.attachShadow({mode: "open"})
    this.build()
  }

  build() {
    const slot = document.createElement('slot')

    const wrap =  document.createElement('article')
    Object.assign(wrap.style, styles.wrap)
    wrap.appendChild(slot)

    this.shadow.appendChild(wrap)
  }
}