import { styles } from "./style/index.js"

export class Portrait extends HTMLElement {
  constructor(){
    super()

    this.src = this.getAttribute('src')
    this.alt = this.getAttribute('alt')
    this.highlight = this.getAttribute('highlight')
    this.caption = this.getAttribute('caption')
    this.shadow = this.attachShadow({mode: 'open'})

    this.build()
  }

  build() {
    const caption = document.createElement('figcaption')
    Object.assign(caption.style, styles.caption)
    caption.innerText = this.caption

    const image = document.createElement('img')
    Object.assign(image.style, this.highlight ? styles.image.highLight : styles.image.normal)

    image.setAttribute('src', this.src)
    image.setAttribute('alt', this.alt)

    const wrap = document.createElement('figure')
    Object.assign(wrap.style, styles.wrap)
    wrap.appendChild(image)
    wrap.appendChild(caption)
    
    this.shadow.appendChild(wrap)
  }
}