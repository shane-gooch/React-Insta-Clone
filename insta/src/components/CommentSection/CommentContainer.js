import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentContainer extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            comments: props.comments,
            commentInput: ''
        }  
    } 

    changeHanlder = e => {
        e.preventDefault();
        this.setState({
            commentInput: e.target.value
        })
    }

    addComment = e => {
        e.preventDefault();
        const newComment = {
            username: this.state.username,
            text: this.state.text
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
                changeHanlder={this.changeHanlder}
                addComment={this.addComment}
                />
            </div>
        )
    }
}



export default CommentContainer; 