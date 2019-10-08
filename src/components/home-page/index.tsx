import React from 'react'
import Header from '../header'


export default class HomePage extends React.Component<any, any> {


    render() {


        return (
            <div>
                <Header title="HOME PAGE" style={{ margin: "50px" }} />
                <img src="http://www.marketmentor.co.in/Website%20in%20Progress%20%20%20_files/400_F_14974071_5hnvfUTFafvwRje7d04d87fMOiXQMCiI.jpg" alt="not available"/>
            </div>
        )
    }
}