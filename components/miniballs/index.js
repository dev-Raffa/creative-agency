import { styles } from "./styles/index.js"

export class MiniBalls extends HTMLElement{
  constructor(){
    super()

    this.color = this.getAttribute('color')
    this.amount = this.getAttribute('amount')
    this.direction = this.getAttribute('direction')
    this.top = this.getAttribute('top')
    this.right = this.getAttribute('right')
    this.bottom = this.getAttribute('bottom')
    this.left = this.getAttribute('left')

    this.build()
  }

  styles(){
    if (this.color) {
      styles.balls.backgroundColor = this.color
    }
    if(this.direction){
      styles.wrap.flexDirection = this.direction
    }
    if(this.top){
      styles.wrap.top = this.top
    }
    if(this.right){
      styles.wrap.right = this.right
    }
    if(this.bottom){
      styles.wrap.bottom = this.bottom
    }
    if(this.left){
      styles.wrap.left = this.left
    }
  }

  build(){
    this.styles()
   
    Object.assign(this.style, styles.wrap)

    for(let i = 0; i < this.amount; i++ ){
      const ball = document.createElement('div')
      Object.assign(ball.style, styles.balls)

      this.appendChild(ball)
    }

  }
}
