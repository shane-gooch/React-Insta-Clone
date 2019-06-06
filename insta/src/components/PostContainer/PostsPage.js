import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import LogOut from '../Login/Logout';
import styled from 'styled-components';
import { Button } from '../Button';

const PostsPageDiv = styled.div`
    max-width: 950px;
    display: flex;
    flex-direction: column;
    align-items: center; 
   margin-right: 50px; 
`

const FlexBoxWidth = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    width: 100%; 
    margin-bottom: 50px; 
`


const LogOutButton = styled(Button)`
    border-color: black
`

class PostsPage extends React.Component {
    state = {
        dummy: [],
        input: ''
    }

    componentDidMount() {
        this.setState({
            dummy:dummyData
        });
    }

    changeHandler = e => {
        this.setState({
            input: e.target.value 
        })
    }

    onClick = () => {
        if(localStorage.getItem('username') && (localStorage.getItem('password'))){
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.removeItem('loggedIn')
        }
        window.location.reload();
    } 

    render() {
        return(
            <PostsPageDiv>
                <FlexBoxWidth>
                    <SearchBar changeHandler={this.changeHandler} input={this.state.input} />
                    <LogOutButton standard onClick={this.onClick}>Log Out</LogOutButton>
                </FlexBoxWidth>
                <PostContainer dummy={this.state.dummy}  input={this.state.input} />
            </PostsPageDiv>
        )
    }
}

export default PostsPage; 