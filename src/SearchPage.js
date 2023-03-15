import { Search } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import WeatherApi from './WeatherApi';
import './SearchPage.css';
import Citycard from './Citycard';



function SearchPage({parentCallback}) {
 const [berlin, setBerlin] = useState("")
 const [london, setLondon] = useState("");
 const [newyork,setNewyork] = useState("");
 const [result, setResult] = useState("");
 const [query, setQuery ] = useState("");
 const [suggestions, setSuggestions] = useState([]);
 const [suggestion, setSuggestion] = useState("");
 
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
     })
  },[suggestion])

  // updating the state on the parent component, whenever the state changes
  useEffect(()=>{
    if (!result){
      return
    }
    parentCallback(result)
  },[result,parentCallback])


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
                    onKeyUp={e => makeSuggestion(e.target.value)}
                    placeholder="Enter a city"
                    />
                    <ul className='suggestions' style={suggestions.length > 0 ? {display:"block"} : {display:"none"}}>
                      {suggestions.map((item) =>  (
                       <li 
                       onClick={()=> setSuggestion(item.url)} 
                       key={item.id}
                       ><button>
                       {`${item.name}, ${item.country}`}
                       </button></li> 
                      ))}
                    </ul>
                </div>
                
                { /*Show and hide button*/ suggestions.length < 1  ?
                <button onClick={submitSearch} className='search_button' type="submit">SEARCH</button>
                : <button style={{opacity: "0"}} onClick={submitSearch} className='search_button' type="submit">SEARCH</button>}
                </form>
            <div className='citycard_container'>
              {berlin === "" || london === "" || newyork === "" ? <></> :
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