import React from 'react';


const Post = props => {
    return (
        <div className='Post'>
            <div className='thumbnail-username'>
                <img className='PxPush thumbnail' src={props.posts.thumbnailUrl} alt="" />
                <strong>{props.posts.username}</strong>
            </div>
            <img src={props.posts.imageUrl} alt="" />
            <div className='iconContainer'>
                <img className='icon' src='./assets/heart-icon.png' alt='' />
                <img className='icon' src='./assets/comment-icon.png' alt='' />
            </div>
            <strong className='PxPush'>{props.posts.likes} likes</strong>
        </div>)
}


export default Post;