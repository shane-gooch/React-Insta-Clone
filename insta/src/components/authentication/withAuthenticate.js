import React from 'react';
import Postspage from '../PostContainer/PostsPage';
import LoginPage from '../Login/Login';

const withAuthenticate = PostsPage => LoginPage =>
    class extends React.Component {
        state ={
            loggedIn: true
        }

        componentDidMount(){
            if(localStorage.getItem('loggedIn')) {
                this.setState({
                    loggedIn: true
                })
            } else {
                this.setState({
                    loggedIn: false
                });
            }
        }
        render(){
            if(this.state.loggedIn) {
                return <PostsPage />
            } else {
                return <LoginPage />
            }
        }
    }

export default withAuthenticate(Postspage)(LoginPage)