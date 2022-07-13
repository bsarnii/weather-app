import { Search } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import WeatherApi from './WeatherApi';
import './SearchPage.css';



function SearchPage({parentCallback}) {
 const [ result, setResult] = useState("");
 const [ query, setQuery ] = useState("");
 const [ search, setSearch ] = useState("")
 
 useEffect(() => {
 WeatherApi.get('/forecast.json',{
    params: {
      q: search,
      days: 3  
      }
   })
   .then(response => {
    setResult(response.data);
   })

  },[search]);

  parentCallback(result)

  return (
    <div className='SearchPage'>
        <div className='container'>
            <h1>Weather app</h1>
            <h2>Enter your location</h2>
              <form onSubmit={e => e.preventDefault()}>
                <div className='search_input'>
                    <Search />
                    <input 
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Enter here"
                    />
                </div>
                <br />
                <button 
                onClick={() => setSearch(query)}
                className='search_button'
                type="submit"
                 >Search</button>
              </form>
                
        </div>
    </div>
  )
}



export default SearchPage