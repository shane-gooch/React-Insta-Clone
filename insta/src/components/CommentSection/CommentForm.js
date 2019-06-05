import React from 'react';

const CommentForm = props => {
    return(
        <form onSubmit={e => props.addComment(e)}>
            <input 
                type='text'
                name='commentInput'
                placeholder="add comment"
                value={props.commentInput}
                onChange={props.changeHandler}
            />
        </form>
    )
}

export default CommentForm; 