import React from 'react';
import styled from 'styled-components';

const PxPush = styled.div`
 margin: 5px 5px 5px 10px;
`

const PxPushstrong = styled.strong`
    margin: 5px 8px 2px 0px; 
`

const Comment = props => {
   
    return(
        <div>
            {props.comments.map(comment => {
                return (
                <PxPush key={comment.text}>
                    <PxPushstrong>{comment.username}</PxPushstrong>{comment.text}
                </PxPush>)
            })}
        </div>
    )
}

export default Comment; 