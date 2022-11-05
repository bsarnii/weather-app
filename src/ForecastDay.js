import React from 'react';
import './ForecastDay.css';

function ForecastDay({date,imgSrc,imgAlt,temp,text}) {
  return (
    <div className='forecastday'>
        <div className='date'>{date}</div>
        <img src={imgSrc} alt={imgAlt} />
            <div className='forecast_temp'>{temp}</div>
        <div className='forecast_text'>{text}</div>
    </div>
  )
}

export default ForecastDay