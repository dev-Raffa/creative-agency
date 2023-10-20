const body = document.querySelector('body')
const buttonsMenu = document.getElementsByClassName('button-menu')
const menu = document.getElementById('menu')
const pictureHomeSection = document.getElementById('picture-home-section')
const pictureAboutUsSection= document.getElementById('picture-about-us-section')
const testimonials = document.getElementById('testimonials')
const picture01ColabSection = document.getElementById('colab-img-01') 
const picture02ColabSection = document.getElementById('colab-img-02') 

function showMenu(){
  Object.assign(menu.style, {display: null})
  Object.assign(body.style, {height: '100vh', overflow:'hidden'})
  setTimeout(()=>{
    Object.assign(menu.style, {transform:'translateX(-100%)'} )
  },100)
}

function hiddenMenu(){
  Object.assign(menu.style,{transform: null})
  Object.assign(body.style, {height: null, overflow:null})
  setTimeout(()=>{
    Object.assign(menu.style, {display:'none'})
  }, 500)  
}

for (let index = 0; index < buttonsMenu.length; index++) {
  const element = buttonsMenu[index];
  
  element.addEventListener('click', () => {
    if(menu.style.transform){
      hiddenMenu() 
      return;
    }
    showMenu()
  })
}

function adjustsOnResize(){
  const width = window.innerWidth
  if(width>950){
    pictureHomeSection.setAttribute('src','assets/images/desktop/home-section-image.png')
    pictureAboutUsSection.setAttribute('src','assets/images/desktop/about-us-section-image.png')
    picture01ColabSection.setAttribute('src','assets/images/desktop/colab-01-section-image.png')
    picture02ColabSection.setAttribute('src','assets/images/desktop/colab-02-section-image.png')

    for(let i=1; i < 3;i++){
      const card =document.createElement('card-testimonial')
      card.setAttribute('src', 'ssets/images/img-testemonial-1.png')
      card.setAttribute('alt', 'foto de perfil Angel Rose')
      card.setAttribute('name', 'Angel Rose')
      card.setAttribute('ocupation','Creative Manager')
      card.setAttribute('testimonial','“ There are many variations passages of Lorem Ipsum majority some by words which do not look .”')
      testimonials.appendChild(card)
    }
  }

  if(width<=900){
    
    for(let i=1; i < 3;i++){
      
      testimonials.removeChild('card-testimonial')   
    }
  }
}

window.addEventListener('resize', adjustsOnResize) 

window.addEventListener('load', adjustsOnResize)