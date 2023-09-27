const styledWrap = {
  boxSizing:'border-box',
  margin:'0',
  display:'flex',
  flexDirection:'row',
  justifyContents: 'space-bettwen',
  alignItems:'center',
  position:'absolute',
  right:'',
  left:'',
  top:'',
  bottom:'',
  gap: '1.5rem',
  padding: '0.25rem',
  width:'fit-content',
  height:'fit-content'
}

const styledBalls= {
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: '50%',
  backgroundColor:'black'
}

export const styles = {
  wrap: styledWrap,
  balls: styledBalls
}