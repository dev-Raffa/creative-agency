const stylesWrap = {
  margin: 0,
  padding: 0,
  boxSizing:'border-box',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  position:'relative',
  width:'95%',
  minWidth:'300px'
}

const styleImageHighLight = {
  margin: 0,
  width:'95%'
}

const styleImageNormal = {
  margin: 0,
  width: '90%'
}

const styleCaption = {
  position:'absolute',
  bottom:'2rem',
  left:'2.5rem',
  color: 'white',
  fontFamily: 'Quicksand',
  fontSize: '3rem',
  fontWeight: '700',
}

export const styles = {
  wrap: stylesWrap,
  image: {
    normal: styleImageNormal,
    highLight: styleImageHighLight
  },
  caption: styleCaption 
}