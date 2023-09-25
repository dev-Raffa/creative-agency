import { styles } from "../style/index.js"

export class SecondaryButton extends HTMLElement {
  constructor(){
    super()

    this.shadow = this.attachShadow({mode: "open"})  
    this.build()
  }

  build(){
    const wrap = document.createElement('button')
    Object.assign(wrap.style, styles.secondary)

    const slot = document.createElement('slot')
    
    wrap.appendChild(slot)
    
    this.shadow.appendChild(wrap)
  }
}
