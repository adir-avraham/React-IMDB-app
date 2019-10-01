import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';



export default class Loader extends React.Component<any, any> {


    render() {

        return (

            <CircularProgress style={{ margin: "4px" }} />

        )
    }
}

