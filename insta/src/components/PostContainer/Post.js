import React from 'react';


class Post extends React.Component {
    constructor(props){
        super(props)
        console.log(props.posts.likes)
        this.state = {
            posts: props.posts,
            likes: props.posts.likes
        }
    }

    addLike = (e) => {
        const newLike = this.state.posts.likes + 1;
        this.setState({
            likes: newLike
        })
    }
    render() {
        return (
            <div className='Post'>
                <div className='thumbnail-username'>
                    <img className='PxPush thumbnail' src={this.state.posts.thumbnailUrl} alt="" />
                    <strong>{this.state.posts.username}</strong>
                </div>
                <img src={this.state.posts.imageUrl} alt="" />
                <div className='iconContainer'>
                    <img onClick={e => this.addLike(e)} className='icon' src='./assets/heart-icon.png' alt='' />
                    <img className='icon' src='./assets/comment-icon.png' alt='' />
                </div>
                <strong className='PxPush'>{this.state.posts.likes} likes</strong>
            </div>)
    }
}



export default Post;