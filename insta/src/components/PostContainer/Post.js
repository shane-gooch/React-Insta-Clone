import React from 'react';


const Post = props => {
    return (
        <div className='Post'>
            <div className='thumbnail-username'>
                <img className='PxPush thumbnail' src={props.posts.thumbnailUrl} alt="" />
                <strong>{props.posts.username}</strong>
            </div>
            <img src={props.posts.imageUrl} alt="" />
            <strong className='PxPush'>{props.posts.likes} likes</strong>
        </div>)
}


export default Post;