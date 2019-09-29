import React from 'react';


export default class Loader extends React.Component<any, any> {


    render() {

        return (

            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>


            
        )
    }
}