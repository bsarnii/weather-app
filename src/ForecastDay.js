import React from 'react';
import './ForecastDay.css';

function ForecastDay({date,imgSrc,imgAlt,maxtemp,mintemp,text}) {
  return (
    <div className='forecastday'>
        <div className='date'>{date}</div>
        <img src={imgSrc} alt={imgAlt} />
        <div className='temp_container'>
            <div className='max_temp'>{maxtemp}</div>
            <div className='min_temp'>{mintemp}</div>
        </div>
        <div className='forecast_text'>{text}</div>
    </div>
  )
}

export default ForecastDay