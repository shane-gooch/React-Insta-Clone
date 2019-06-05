import React from 'react';
import Post from '../PostContainer/Post';
import CommentContainer from '../CommentSection/CommentContainer';
import PropTypes from 'prop-types'; 



const PostContainer = props => {
    return(
        <div>
            {props.dummy.map(data => {
                return (
                <div className="PostContainer">
                        <Post posts={data} />
                        <CommentContainer comments={data.comments} />
                </div>)
            })}
        </div>
    )
}

PostContainer.propTypes = {
    dummy: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            imageURL: PropTypes.string.isRequired,
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