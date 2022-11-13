import React from 'react';
import './Forecast.css';
import ForecastDay from './ForecastDay';

function Forecast({results}) {
 let date3=results.forecast.forecastday[2].date.split("-").reverse().join(".");
  return (
    <div className='forecast'>
       <ForecastDay 
       date="Today"
       imgSrc={results.forecast.forecastday[0].day.condition.icon}
       imgAlt={results.forecast.forecastday[0].day.condition.text} 
       temp={results.forecast.forecastday[0].day.avgtemp_c + "°C"}  
       text={results.forecast.forecastday[0].day.condition.text} />
       <ForecastDay 
       date="Tomorrow"
       imgSrc={results.forecast.forecastday[1].day.condition.icon}
       imgAlt={results.forecast.forecastday[1].day.condition.text} 
       temp={results.forecast.forecastday[1].day.avgtemp_c + "°C"}  
       text={results.forecast.forecastday[1].day.condition.text} />
       <ForecastDay 
       date={date3}
       imgSrc={results.forecast.forecastday[2].day.condition.icon}
       imgAlt={results.forecast.forecastday[2].day.condition.text} 
       temp={results.forecast.forecastday[2].day.avgtemp_c + "°C"}  
       text={results.forecast.forecastday[2].day.condition.text} />
    </div>
  )
}

export default Forecast