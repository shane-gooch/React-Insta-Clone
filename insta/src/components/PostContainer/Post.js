import React from 'react';
import styled from 'styled-components';

const ThummbmailUsernmaeContainer  = styled.div`
    display: flex;
    align-items: center;
    padding: 5px; 
`
const Thumbnail = styled.img`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 8px;
`

const PostPicture = styled.img`
    width: 100%; 
`

const PxPush = styled.strong`
 margin: 5px 10px 5px 10px;
`

const PxPushDiv = styled.div`
 margin: 5px 10px 5px 10px;
`

class Post extends React.Component {
    constructor(props){
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
                <ThummbmailUsernmaeContainer>
                    <Thumbnail src={this.state.posts.thumbnailUrl} alt="" />
                    <strong>{this.state.posts.username}</strong>
                </ThummbmailUsernmaeContainer>
                <PostPicture src={this.state.posts.imageUrl} alt="" />
                <PxPushDiv>
                    <img onClick={this.addLike} className='icon' src='./assets/heart-icon.png' alt='' />
                    <img className='icon' src='./assets/comment-icon.png' alt='' />
                </PxPushDiv>
                <PxPush> {this.state.likes} likes </PxPush>
            </div>)
    }
}



export default Post;