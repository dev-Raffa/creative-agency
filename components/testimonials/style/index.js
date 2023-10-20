
const styleWrap = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems:'center',
  boxSizing:'border-box',  
  margin: 0,
  width: '90%',
  maxWidth:'340px',
  minWidth: '290px',
  height:'257px',
  padding: '10px',
  borderRadius: '10px',
  boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.05)'
}

const styleProfileWrap ={
  display:'flex',
  gap: '1rem',
  width:'100%',
  justifyContent: 'center',
  alignItems: 'center'
}

const styleProfilePictureWrap = {
  margin: 0,
  padding: 0,
  boxSizing:'border-box',
  display: 'flex',
  width:'10rem',
  height:'10rem',
  borderRadius: '50%',
  overflow:'hidden'
}

const styleName = {
  fontFamily: 'Quicksand',
  fontSize: '2.25rem',
  fontWeight: '600',
  color: 'rgba(55, 125, 255, 1)'
}

const styleOcupation = {
  fontfamily: 'Quicksand',
  fontsize: '1,375rem',
  fontweight: '400',
}

const styleDescriptionWrap = {

}

const styleTestimonial = {
  width: '100%',
  fontFamily: 'Quicksand',
  fontSize: '1.75rem',
  fontWeight: '400',
}

export const styles = {
  wrap: styleWrap,
  profile: {
    wrap:styleProfileWrap ,
    picture: {
      wrap: styleProfilePictureWrap,
      img:'',
    },
    description:{
      wrap: styleDescriptionWrap,
      name: styleName,
      ocupation: styleOcupation
    } 
  },
  testimonial: styleTestimonial
}