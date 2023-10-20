import { styles } from "./style/index.js"

export class Card extends HTMLElement {

  constructor(){
    super()
  }
  
  connectedCallback() {
    
    this.shadow =  this.attachShadow({mode: "open"})
    const slot = document.createElement('slot')

    const wrap =  document.createElement('article')
    
    Object.assign(wrap.style, styles.wrap)
    wrap.appendChild(slot)

    this.shadow.appendChild(wrap)
    
  }
}