import { styles } from "./style/index.js"

export class Card extends HTMLElement {
  static observeAttributes = ['isShow']

  constructor(){
    super()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
    );
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