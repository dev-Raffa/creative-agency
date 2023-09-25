import { styles } from './style/index.js'

export class OffCanvas extends HTMLElement {
  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    Object.assign(this.style, styles.wrap)
    this.build()
  }

  build() {
    const slot = document.createElement('slot')
    this.shadow.appendChild(slot)
  }
}
