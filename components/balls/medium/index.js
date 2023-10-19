import { styles } from "../styles/index.js"

export class MediumBall extends HTMLElement {
  constructor(){
    super()

    this.color = this.getAttribute('color')
    this.top = this.getAttribute('top')
    this.right = this.getAttribute('right')
    this.bottom = this.getAttribute('bottom')
    this.left = this.getAttribute('left')

    this.build()
  }

  styles(){
    if (this.color) {
      styles.ball.backgroundColor = this.color
    }
    if(this.top){
      styles.ball.top = this.top
    }
    if(this.right){
      styles.ball.right = this.right
    }
    if(this.bottom){
      styles.ball.bottom = this.bottom
    }
    if(this.left){
      styles.ball.left = this.left
    }
  }

  build(){
    this.styles()

    const ball = document.createElement('div')
    Object.assign(ball.style, styles.ball)

    this.appendChild(ball)
  }
}