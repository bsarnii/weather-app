import './App.css';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import './MediaQueries.css';
import React, { useState } from 'react';

function App() {
const [searchValue,setSearchValue] = useState("");

    return (
      <div className="App">
        { searchValue ==="" ? <SearchPage parentCallback={setSearchValue}/> : ""}
        { searchValue !=="" ? <MainPage results={searchValue}/> : ""}
      </div>
    );
}

export default App;
