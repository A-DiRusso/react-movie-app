import React from 'react';
import './App.css';
import movies from './movies';
import GenreList from './GenreList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GenreList genres={}/>
      </header>
    </div>
  );
}

export default App;
