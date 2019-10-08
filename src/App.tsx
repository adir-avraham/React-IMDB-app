import './App.css';
import FeedbackPage from './components/feedback'
import HomePage from './components/home-page'
import MoviePage from './components/movie-page'
import MoviesPage from './components/movies-page'
import Navbar from './components/navbar'
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";




const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/movies-page" component={MoviesPage} />
          <Route path="/home-page" component={HomePage} />
          <Route path="/movie-page/:imdbID" component={MoviePage} />
          <Route path="/feedback" component={FeedbackPage} />
         
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
