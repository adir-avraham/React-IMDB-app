import './App.css';
import Header from './components/header';
import HomePage from './components/home-page'
import MoviesPage from './components/movies-page'

import Navbar from './components/navbar'
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="OMDB API"/>

      <BrowserRouter>
                
               <Navbar/>

                    <Switch>
                        <Route path="/movies-page" component={MoviesPage} />
                        <Route path="/home-page" component={HomePage} />
                    </Switch>

      </BrowserRouter>


      {/* <MoviesPage/> */}
    </div>
  );
}

export default App;
