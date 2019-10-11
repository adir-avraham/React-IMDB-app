import { connect } from 'react-redux';
import Header from '../header';
import React from 'react';

export class FeedbackPage extends React.Component<any, any> {


    render() {
        const {comments} = this.props

        return (
            <div>
                <Header title="FEEDBACKS PAGE" style={{ margin: "50px" }} />
                
                
                {comments.map((item:any, index: number) => 
                    <p key={`com_${index}`}>{item.comment}</p>
                    )}
                                
            </div>
        )
    }
}




const mapStateToProps = (state: any) => {
    const {comments} = state;
    return {
    comments
    }
} 

const mapDispatchToProps = (diuspatch: any) => {
    return {};
}


export default connect(mapStateToProps, null)(FeedbackPage) 