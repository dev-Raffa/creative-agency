export class Testimonial extends HTMLElement {
  
  constructor(){
    super()

    this.shadow = this.attachShadow({mode: 'open'})

  }

  connectedCallback() {
    const linkStyles = document.createElement('link')
    linkStyles.setAttribute('rel', 'stylesheet')
    linkStyles.setAttribute('src', 'components/testimonials/style/styles.css')
    this.shadow.appendChild(linkStyles)

    let testimonials = Math.floor(window.innerWidth / 300)
    console.log(testimonials)
    
    if(testimonials < 1 ){
      testimonials = 1
    }

    if(testimonials>3){
      console.log('testimonials é maior que 3')
      testimonials = 3
    }
    for(let i=0; i<= testimonials; i++){
      console.log(`construindo ${i}`)
      this.build()
    }
    
  }

  build() {

      const ocupation = document.createElement('p')
      ocupation.classList.add('ocupation')
      ocupation.innerText = this.getAttribute('ocupation')
      
      const name = document.createElement('h4')
      name.innerText = this.getAttribute('name')
      
      const descriptionWrap = document.createElement('section')
      descriptionWrap.classList.add('description')
      descriptionWrap.appendChild(name)
      descriptionWrap.appendChild(ocupation)
      
      const pictureProfile = document.createElement('img')
      pictureProfile.setAttribute('src', this.getAttribute('src'))
      pictureProfile.setAttribute('alt', this.getAttribute('pictureAlt'))
      
      const pictureProfileWrap =  document.createElement('figure')
      pictureProfileWrap.appendChild(pictureProfile)      
      
      const profileWrap = document.createElement('section')
      profileWrap.classList.add('profile-wrap')
      profileWrap.appendChild(pictureProfileWrap)
      profileWrap.appendChild(descriptionWrap)
      
      const testimonialwrap = document.createElement('p')
      testimonialwrap.classList.add('testimonial-tex')
      testimonialwrap.innerText = this.getAttribute('testimonial')
      
      const wrap = document.createElement('article')
      wrap.appendChild(profileWrap)
      wrap.appendChild(testimonialwrap)

      this.shadow.appendChild(wrap)
      console.log('terminou')
  }

}