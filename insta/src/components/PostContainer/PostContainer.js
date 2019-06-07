import React from 'react';
import Post from '../PostContainer/Post';
import CommentContainer from '../CommentSection/CommentContainer';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const PostContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    width: 70%;
    margin-bottom: 80px;
    margin-left: 150px;
    border: 1px solid #E8E8E8;
    border-radius: 10px; 
`

const PostContainer = props => {
    
    return(
        <div>
            {props.dummy.filter(post => post.username.includes(props.input)).map(data => {
                return (
                <PostContainerDiv key={data.username}>
                        <Post posts={data} />
                        <CommentContainer comments={data.comments} />
                </PostContainerDiv>)
            })}
        </div>
    )
}

PostContainer.propTypes = {
    dummy: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            imageURL: PropTypes.string,
            likes: PropTypes.number,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )
        })
    )
}


export default PostContainer; 