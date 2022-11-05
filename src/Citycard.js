import "./Citycard.css"

function Citycard({name,img,temp,text}) {

  return (
    <div className='citycard'>
        <div className='city_name'>{name}</div>
        <img src={img} alt="img" />
        <div className='citycard_temp'>{temp+"°"}</div>
        <div className='citycard_text'>{text}</div>
    </div>
  )
}

export default Citycard