import React from 'react';

const CommentContainer = props => {
    return(
        <div className='CommentContainer'>
            {props.comments.map(comment => {
               return (
               <div key={comment.id}>
                    <p><strong>{comment.username}</strong>{comment.text}</p>
                </div>)
            })}
        </div>
    )
}

export default CommentContainer; 