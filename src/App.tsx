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
      <BrowserRouter>
        <Navbar />
        <Header title="OMDB API" style={{ margin: "50px" }} />

        <Switch>
          <Route path="/movies-page" component={MoviesPage} />
          <Route path="/home-page" component={HomePage} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
