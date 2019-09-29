import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



export default class Header extends React.Component<any, any> {
    
    render() {
        const {title} = this.props
        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}
