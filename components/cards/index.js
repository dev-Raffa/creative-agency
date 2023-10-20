import { styles } from "./style/index.js"

export class Card extends HTMLElement {
  static observeAttributes = ['isShow']

  constructor(){
    super()
  }
  
  connectedCallback() {
    console.log(this)
    /*
    if(this.getAttribute('isShow')){
      Object.assign(this.style, {display: 'block'})
    }*/
    /*
    this.shadow =  this.attachShadow({mode: "open"})
    const slot = document.createElement('slot')
    
    const wrap =  document.createElement('article')
    
    Object.assign(wrap.style, styles.wrap)
    wrap.appendChild(slot)
    
    this.shadow.appendChild(wrap)
    */
  }
}