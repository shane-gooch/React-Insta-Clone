import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            comments: props.comments,
            commentInput: ''
        }  
    } 

    changeHandler = e => {
        console.log(e)
        e.preventDefault();
        this.setState({
            commentInput: e.target.value
        })
    }

    addComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'shane',
            text: this.state.commentInput
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            commentInput: ''
        })
    }

    render() {
        return(
            <div className='CommentContainer'>
                <Comment key={this.state.id} comments={this.state.comments}/>
                <CommentForm 
                commentInput={this.state.commentInput}
                changeHandler={this.changeHandler}
                addComment={this.addComment}
                />
            </div>
        )
    }
}



export default CommentContainer; 