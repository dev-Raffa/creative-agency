const body = document.querySelector('body')
const buttonsMenu = document.getElementsByClassName('button-menu')
const menu = document.getElementById('menu')


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
