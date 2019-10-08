import { connect } from 'react-redux';
import React from 'react';
import Header from '../header';

export class FeedbackPage extends React.Component<any, any> {


    render() {


        return (
            <div>
                <Header title="FEEDBACK PAGE" style={{ margin: "50px" }} />
                <p>{this.props.currentComment}</p>
                
              
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    
    return {
    currentComment: state.comment
    }
} 

const mapDispatchToProps = (diuspatch: any) => {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedbackPage) 