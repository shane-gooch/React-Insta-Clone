import React from 'react';

const Comment = props => {
   
    return(
        <div>
            {props.comments.map(comment => {
                return (
                <div key={comment.id}>
                    <strong>{comment.username}</strong>{comment.text}
                </div>)
            })}
        </div>
    )
}

export default Comment; 