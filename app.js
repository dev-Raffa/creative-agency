const buttonsMenu = document.getElementsByClassName('button-menu')
const menu = document.getElementById('menu')
console.log(menu)

for (let index = 0; index < buttonsMenu.length; index++) {
  const element = buttonsMenu[index];
  
  element.addEventListener('click', () => {
    let show = menu.style.transform
    console.log(show)
    if(menu.style.transform){
      Object.assign(menu.style,{transform: null})
      return;
    }
    const style= {
      transform: 'translateX(-100%)',
    }
    Object.assign(menu.style, style)
  })
  
}
