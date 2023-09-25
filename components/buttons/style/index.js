
const stylePrimary = {
  cursor: 'pointer',
  border: 'none',
  display: "flex",
  justifyContent:'center',
  alignItems: 'center',
  width: '18.1rem',
  height: '5rem',
  borderRadius: '4rem',
  gap: '1.25rem',
  backgroundColor: 'rgba(55, 125, 255, 1)',
  color:'white',
  boxShadow: '0 4px 8px 0 rgba(55, 125, 255, 0.5)'
}

const styleSecondary = {
  cursor: 'pointer',
  border: 'none',
  display: "flex",
  justifyContent:'center',
  alignItems: 'center',
  width: '18.1rem',
  height: '5rem',
  borderRadius: '4rem',
  gap:'1rem',
  backgroundColor: 'transparent',
  color:'rgba(55, 125, 255, 1)',
  border: '1px solid '
}

export const styles = {
  primary: stylePrimary,
  secondary: styleSecondary
}