import './App.css';
import Header from './components/header';
import MoviesPage from './components/movies-page'
import React from 'react';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="OMDB API"/>
      <MoviesPage/>
    </div>
  );
}

export default App;
