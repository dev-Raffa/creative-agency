import { styles } from "./style/index.js"

export class Testimonial extends HTMLElement {
  static observedAttributes = ["show"]
  constructor(){
    super()

    this.render = false
    this.profilePicture = this.getAttribute('src')
    this.pictureAlt = this.getAttribute('pictureAlt')
    this.name = this.getAttribute('name')
    this.ocupation = this.getAttribute('ocupation')
    this.testimonial = this.getAttribute('testimonial')
    this.shadow = this.attachShadow({mode: 'open'})  

  }

  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
    );
    if (newValue != oldValue & name==='show'){
      this.hasAttribute('show') ? this.build() : this.destroy()
    }
  }
  

  connectedCallback() {
    if(this.hasAttribute('show')){
      this.build()
    }
  }
  build() {
      const ocupation = document.createElement('p')
      ocupation.innerText = this.ocupation
      Object.assign(ocupation.style, styles.profile.description.ocupation)
      
      const name = document.createElement('h4')
      name.innerText = this.name
      Object.assign(name.style, styles.profile.description.name)
      
      const descriptionWrap = document.createElement('section')
      descriptionWrap.appendChild(name)
      descriptionWrap.appendChild(ocupation)
      Object.assign(descriptionWrap.style, styles.profile.description.wrap)
      
      const pictureProfile = document.createElement('img')
      pictureProfile.setAttribute('src', this.profilePicture)
      pictureProfile.setAttribute('alt', this.pictureAlt)
      
      const pictureProfileWrap =  document.createElement('figure')
      Object.assign(pictureProfileWrap.style, styles.profile.picture.wrap)
      pictureProfileWrap.appendChild(pictureProfile)
      
      const profileWrap = document.createElement('section')
      Object.assign( profileWrap.style, styles.profile.wrap)
      profileWrap.appendChild(pictureProfileWrap)
      profileWrap.appendChild(descriptionWrap)
      
      const testimonialwrap = document.createElement('p')
      testimonialwrap.innerText = this.testimonial
      Object.assign( testimonialwrap.style, styles.testimonial)
      
      this.wrap = document.createElement('article')
      this.wrap.appendChild(profileWrap)
      this.wrap.appendChild(testimonialwrap)
      Object.assign(this.wrap.style, styles.wrap)

         
      this.shadow.appendChild(this.wrap)
      
      this.render = true
  }

  destroy(){
   this.render && console.log(this.shadow)
  }
}