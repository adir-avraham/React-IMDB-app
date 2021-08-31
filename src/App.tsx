import './App.css';
import AddNewArrivals from './components/add-new-arriaval';
import Favourites from './components/favourites';
import FeedbackPage from './components/feedback';
import GamesPage from './components/games-page';
import HomePage from './components/home-page';
import MoviePage from './components/movie-page';
import MoviesPage from './components/movies-page';
import Navbar from './components/navbar';
import NewArrivals from './components/new-arrivals';
import React from 'react';
import SeriesPage from './components/serieses-page';
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
          <Route path="/favourites" component={Favourites} />
          <Route path="/add-new-arriaval" component={AddNewArrivals} />
          <Route path="/new-arriavals" component={NewArrivals} /> 
          <Route path="/seriess-page" component={SeriesPage} />   
          <Route path="/games-page" component={GamesPage} />        
          <Route path="**" component={HomePage} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
