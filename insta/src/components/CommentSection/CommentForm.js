import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    margin: 5px 10px 5px 10px;
    paddgin: 5px; 
`

const CommentForm = props => {
    return(
        <Form onSubmit={e => props.addComment(e)}>
            <input 
                type='text'
                name='commentInput'
                placeholder="add comment"
                value={props.commentInput}
                onChange={props.changeHandler}
            />
        </Form>
    )
}

export default CommentForm; 