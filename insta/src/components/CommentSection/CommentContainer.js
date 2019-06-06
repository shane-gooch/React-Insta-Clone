import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';


// const CommentContainerDiv = styled.div`
//     margin: 5px 10px 5px 10px;
// `

class CommentContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            commentInput: ''
        }  
    } 

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            commentInput: e.target.value
        })
    }

    addComment = e => {
        e.preventDefault();
        const newComment = {
            username: localStorage.getItem('username'),
            text: this.state.commentInput
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            commentInput: ''
        })
    }
    

    render() {
        return(
            <div>
                <Comment key={this.state.comments} comments={this.state.comments}/>
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