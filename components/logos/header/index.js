import { styles } from "./style/index.js"
import { picture } from "./pieces/picture/index.js"
import {text} from "./pieces/texts/index.js"


export class LogoHeader extends HTMLElement {
  constructor(){
    super()
    
    this.shadow = this.attachShadow({mode: 'open'})
    this.build()    
  }
  
  build() {    
    const wrap = document.createElement('article')
    Object.assign(wrap.style, styles.wrap)
    wrap.appendChild(picture)
    wrap.appendChild(text)
    this.shadow.appendChild(wrap)
  }
}


