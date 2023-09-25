const styleWrap = {
  margin: 0,
  paddin: 0,
  boxSizing: 'border-box',
  position: 'relative',
  display:'flex',
  alignItems: 'center',
  width: '100%',
  height: '5rem',
  gap: '1.5rem',
}

const stylePictureWrap = {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  width: '6rem',
  height: '6rem'
}

const styleWRapText = {
  margin: 0,
  paddin: 0,
  boxSizing: 'border-box',
  width: 'fit-content',
  height: 'fit-content',
  color:'black',
  gap:'2rem'
}

const stylePrimaryText = {
  margin: 0,
  paddin: 0,
  boxSizing: 'border-box',
  fontFamily: 'Quicksand',
  fontWeight: 700,
  fontSize: '2.25rem',
}

const styleSecondaryText = {
  margin: 0,
  paddin: 0,
  boxSizing: 'border-box',
  fontFamily: 'Quicksand',
  fontWeight: 300,
  fontSize: '2rem'
}

export const styles = {
  wrap: styleWrap,
  picture:{
    wrap: stylePictureWrap
  },
  text: {
    wrap: styleWRapText,
    primary: stylePrimaryText,
    secondary: styleSecondaryText
  }
}