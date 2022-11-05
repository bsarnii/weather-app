import './App.css';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import './MediaQueries.css';
import React, { useState } from 'react';

function App() {
const [searchValue,setSearchValue] = useState("");


  const handleCallback = childData => {
    setSearchValue(childData)
  }

  if( searchValue === "") {
    return (
      <div className="App">
        <SearchPage parentCallback={handleCallback} />
        </div>
    );
  } else {
    return (
      <div className="App">
        <MainPage results={searchValue} />
      </div>
    );
  }

}

export default App;
