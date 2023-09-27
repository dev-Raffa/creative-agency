import { styles } from "./style/index.js"

export class Testimonial extends HTMLElement {
  constructor(){
    super()

    this.shadow = this.attachShadow({mode: 'open'})
    this.profilePicture = this.getAttribute('src')
    this.pictureAlt = this.getAttribute('pictureAlt')
    this.name = this.getAttribute('name')
    this.ocupation = this.getAttribute('ocupation')
    this.testimonial = this.getAttribute('testimonial')
    
    if(!this.getAttribute('visibility')){ 
      Object.assign(this.style, {display:'none'})
    }
    
    this.build() 

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

    const wrap = document.createElement('article')
    wrap.appendChild(profileWrap)
    wrap.appendChild(testimonialwrap)
    Object.assign(wrap.style, styles.wrap)

    this.shadow.appendChild(wrap)
  }
}