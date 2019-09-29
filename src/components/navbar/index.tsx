import React from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends React.Component<any, any> {


    render() {


        return (


            <div>


<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item"> <button className="btn btn-light mr-2"> 
      <Link to="/home-page">Home page</Link>

    
      </button>
      </li>

      <li className="nav-item">
      <button className="btn btn-light">
      <Link to="/movies-page">Movies page</Link>
       

      </button>
      </li>
    </ul>
  </div>
</nav>




            </div>
        )

    }
}