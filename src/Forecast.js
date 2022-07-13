import React from 'react';
import './Forecast.css';
import ForecastDay from './ForecastDay';

function Forecast({results}) {
  return (
    <div className='forecast'>
       <ForecastDay 
       date={results.forecast.forecastday[0].date}
       imgSrc={results.forecast.forecastday[0].day.condition.icon}
       imgAlt={results.forecast.forecastday[0].day.condition.text} 
       maxtemp={results.forecast.forecastday[0].day.maxtemp_c + "°"} 
       mintemp={results.forecast.forecastday[0].day.mintemp_c  + "°" } 
       text={results.forecast.forecastday[0].day.condition.text} />
       <ForecastDay 
       date={results.forecast.forecastday[1].date}
       imgSrc={results.forecast.forecastday[1].day.condition.icon}
       imgAlt={results.forecast.forecastday[1].day.condition.text} 
       maxtemp={results.forecast.forecastday[1].day.maxtemp_c + "°"} 
       mintemp={results.forecast.forecastday[1].day.mintemp_c  + "°" } 
       text={results.forecast.forecastday[1].day.condition.text} />
       <ForecastDay 
       date={results.forecast.forecastday[2].date}
       imgSrc={results.forecast.forecastday[2].day.condition.icon}
       imgAlt={results.forecast.forecastday[2].day.condition.text} 
       maxtemp={results.forecast.forecastday[2].day.maxtemp_c + "°"} 
       mintemp={results.forecast.forecastday[2].day.mintemp_c  + "°" } 
       text={results.forecast.forecastday[2].day.condition.text} />
    </div>
  )
}

export default Forecast