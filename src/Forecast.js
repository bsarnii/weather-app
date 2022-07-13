import React from 'react';
import './Forecast.css';
import ForecastDay from './ForecastDay';

function Forecast({results}) {
 let date1=results.forecast.forecastday[0].date.split("-").reverse().join(".");
 let date2=results.forecast.forecastday[1].date.split("-").reverse().join(".");
 let date3=results.forecast.forecastday[2].date.split("-").reverse().join(".");
  return (
    <div className='forecast'>
       <ForecastDay 
       date={date1}
       imgSrc={results.forecast.forecastday[0].day.condition.icon}
       imgAlt={results.forecast.forecastday[0].day.condition.text} 
       maxtemp={results.forecast.forecastday[0].day.maxtemp_c + "°"} 
       mintemp={results.forecast.forecastday[0].day.mintemp_c  + "°" } 
       text={results.forecast.forecastday[0].day.condition.text} />
       <ForecastDay 
       date={date2}
       imgSrc={results.forecast.forecastday[1].day.condition.icon}
       imgAlt={results.forecast.forecastday[1].day.condition.text} 
       maxtemp={results.forecast.forecastday[1].day.maxtemp_c + "°"} 
       mintemp={results.forecast.forecastday[1].day.mintemp_c  + "°" } 
       text={results.forecast.forecastday[1].day.condition.text} />
       <ForecastDay 
       date={date3}
       imgSrc={results.forecast.forecastday[2].day.condition.icon}
       imgAlt={results.forecast.forecastday[2].day.condition.text} 
       maxtemp={results.forecast.forecastday[2].day.maxtemp_c + "°"} 
       mintemp={results.forecast.forecastday[2].day.mintemp_c  + "°" } 
       text={results.forecast.forecastday[2].day.condition.text} />
    </div>
  )
}

export default Forecast