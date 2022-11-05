import { Search } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import WeatherApi from './WeatherApi';
import './SearchPage.css';
import Citycard from './Citycard';



function SearchPage({parentCallback}) {
 const [berlin, setBerlin] = useState("")
 const [london, setLondon] = useState("");
 const [newyork,setNewyork] = useState("");
 const [ result, setResult] = useState("");
 const [ query, setQuery ] = useState("");
 
 useEffect(() => {
  //Berlin
  WeatherApi.get('/forecast.json',{
     params: {
       q: "Berlin",
       days: 1  
       }
    })
    .then(response => {
     setBerlin(response.data);
    });
    //London
    WeatherApi.get('/forecast.json',{
      params: {
        q: "London",
        days: 1  
        }
     })
     .then(response => {
      setLondon(response.data)
     });
     //New York
     WeatherApi.get('/forecast.json',{
      params: {
        q: "New York",
        days: 1  
        }
     })
     .then(response => {
      setNewyork(response.data)
     })
   },[]);
   //Search for city
 const submitSearch = () => {
  WeatherApi.get('/forecast.json',{
    params: {
      q: query,
      days: 3  
      }
   })
   .then(response => {
    setResult(response.data);
   })
 }

  parentCallback(result)

  return (
    <div className='SearchPage'>
        <img className="fog" src="background.png" alt="fog"/>
        <div className='container'>
            <h1>Weather app</h1>
              <form onSubmit={e => e.preventDefault()}>
                <div className='search_input'>
                    <Search />
                    <input 
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Enter a city"
                    />
                </div>
                <button 
                onClick={submitSearch}
                className='search_button'
                type="submit"
                 >SEARCH</button>
              </form>
            <div className='citycard_container'>
              {newyork === "" ? "" :
              <>
              <Citycard name="Berlin" img={berlin.current.condition.icon} temp={berlin.current.temp_c} text={berlin.current.condition.text}/>
              <Citycard name="London" img={london.current.condition.icon} temp={london.current.temp_c} text={london.current.condition.text}/>
              <Citycard name="New York" img={newyork.current.condition.icon} temp={berlin.current.temp_c} text={newyork.current.condition.text}/>
              </>
              }
              
            </div>
        </div>
    </div>
  )
}



export default SearchPage