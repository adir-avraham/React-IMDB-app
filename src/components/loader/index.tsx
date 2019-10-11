import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';



export default class Loader extends React.Component<any, any> {


    render() {

        return (

            <CircularProgress style={{ margin: "4px" }} />

        )
    }
}

