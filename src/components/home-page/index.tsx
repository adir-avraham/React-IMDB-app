import Header from '../header'
import React from 'react'


export default class HomePage extends React.Component<any, any> {


    render() {


        return (
            <div>
                <Header title="HOME PAGE" style={{ margin: "50px" }} />
                <img src="https://img.freepik.com/free-vector/cinema-background-with-stars_52683-1699.jpg?size=338&ext=jpg" alt="not available"/>
            </div>
        )
    }
}