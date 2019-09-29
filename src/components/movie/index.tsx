import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Movie extends React.Component<any, any> {
    
    
    render() {
        const {Title, Year, imdbID, Type, Poster} = this.props
        const defaultPicture = "https://images.immediate.co.uk/production/volatile/sites/3/2017/11/imagenotavailable1-39de324.png?quality=90&resize=620,413"
        let src = null;
        if (Poster === "N/A") {
            src = defaultPicture
        } else {
        src = Poster
        }
   

        return (
      
                
                <div className="card mb-3" style={{width: "18rem"}}  >
                    <img src={src} className="card-img-top" alt="not available"/>
                        <div className="card-body">
                            <h5 className="card-title">{Title}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Year: {Year}</li>
                            <li className="list-group-item">Type: {Type}</li>
                            <li className="list-group-item">imdb-ID: {imdbID}</li>
                        </ul>
                </div>

              



                )
            }
        }
