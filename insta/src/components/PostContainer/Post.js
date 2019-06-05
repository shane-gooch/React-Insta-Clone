import React from 'react';



class Post extends React.Component {
    constructor(props){
        console.log(props.posts.likes)
        super(props)
        this.state = {
            posts: props.posts,
            likes: props.posts.likes
        }
    }

    addLike = () => {
        this.setState(prevState => {
            return{
                likes: prevState.likes + 1
            }
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
                    <img onClick={this.addLike} className='icon' src='./assets/heart-icon.png' alt='' />
                    <img className='icon' src='./assets/comment-icon.png' alt='' />
                </div>
                <strong className='PxPush'>{this.state.likes} likes</strong>
            </div>)
    }
}



export default Post;