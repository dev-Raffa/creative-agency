const styleWrap = {
  margin: 0,
  paddin: 0,
  boxSizing: 'border-box',
  position: 'relative',
  display:'flex',
  alignItems: 'center',
  width: '12.5rem',
  height: '5rem',
  gap: '1rem',
}

const stylePictureWrap = {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  width: '4ren',
  height: '4rem'
}

const styleWRapText = {
  margin: 0,
  paddin: 0,
  boxSizing: 'border-box',
  width: 'fit-content',
  height: 'fit-content'
}

const stylePrimaryText = {
  margin: 0,
  paddin: 0,
  boxSizing: 'border-box',
  fontFamily: 'Quicksand',
  fontWeight: 700,
  fontSize: '1.5rem',
}

const styleSecondaryText = {
  margin: 0,
  paddin: 0,
  boxSizing: 'border-box',
  fontFamily: 'Quicksand',
  fontWeight: 300,
  fontSize: '1.5rem'
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