import React, { useEffect, useState } from 'react';
import './MainPage.css';
import WeatherApi from './WeatherApi';
import { Search } from '@mui/icons-material';
import Forecast from './Forecast';

function MainPage({results}) {
const [query, setQuery] = useState("");
const [result, setResult] = useState(results);
const [suggestions, setSuggestions] = useState([]);
const [suggestion, setSuggestion] = useState("");
const [requestSuccess, setRequestSuccess] = useState(true)
  

   const submitSearch = () => {
    if (!query) {
      return
    }
    WeatherApi.get('/forecast.json',{
      params: {
        q: query,
        days: 3  
        }
     })
     .then(response => {
      setResult(response.data);
      setSuggestions([])
      setQuery("")
      setRequestSuccess(true)
     })
     .catch(function (){
      setRequestSuccess(false)
     })

   }
     //Make Suggestions
  const makeSuggestion = (value) => {
    if (!value | value.length < 2) {
      return setSuggestions([])
    }
    WeatherApi.get('/search.json',{
      params:{
        q: value
      }
    })
    .then(response => {
      setSuggestions(response.data)
    })
  }
    // If suggestion updated onClick, then fetch city
    useEffect(()=>{
      if (!suggestion){
        return
      }
      WeatherApi.get('/forecast.json',{
        params: {
          q: suggestion,
          days: 3  
          }
       })
       .then(response => {
        setResult(response.data);
        setSuggestions([]);
        setQuery("")
        setRequestSuccess(true)
       })
    },[suggestion])
  return (
    <div className='MainPage'>
      <img className="fog" src="background.png" alt="fog"/>
        <div className='main_container'>
          <form onSubmit={e => e.preventDefault()}>
          {!requestSuccess && <p style={{color: "rgb(255,0,0)",fontWeight: "bold", textAlign:"center"}}>Please enter a valid city name!</p>}
            <div 
            className='search_input_main'
            style={{border: requestSuccess ? "1px solid rgba(250,250,250,.5)" : "1px solid rgb(255,0,0)"}}
            >
              
                <Search />
                <input 
                onChange={e => setQuery(e.target.value)}
                onKeyUp={e => makeSuggestion(e.target.value)}
                type="text"
                placeholder="Enter a new location"
                />
                <ul className='suggestions' style={query.length > 0 ? {display:"block"} : {display:"none"}}>
                {suggestions.map(item =>  (
                  <li 
                  onClick={()=> setSuggestion(item.url)} 
                  key={item.id}
                  >
                    <button>{`${item.name}, ${item.country}`}</button>
                    </li> 
                  ))}
                </ul>
                <button 
                onClick={submitSearch}
                style={{display:"none"}}>Search</button>
              
            </div>
          </form>

          <h2 className='location'>{result.location.name}, {result.location.country}</h2>
          <div className='weather_today_container'>
              <h2 className='text_today_today'>Today</h2>
              <div className='logo_with_temp'>
                  <img 
                  src={result.current.condition.icon} 
                  alt={result.current.condition.text}
                  className="logo_today" />
                  <h1 className='temp'>{result.current.temp_c.toString() + "°C"}</h1>
              </div>
              <h2 className='text_today'>{result.current.condition.text}</h2>
            </div>
            <Forecast results={result} />
        </div>
    </div>
  )
}

export default MainPage