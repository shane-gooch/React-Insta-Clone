import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import LogOut from '../Login/Logout';


class PostsPage extends React.Component {
    state = {
        dummy: [],
        search: '',
    }

    componentDidMount() {
        this.setState({
            dummy:dummyData
        });
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
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
            <div className="PostsPage">
                <SearchBar 
                changeHandler={this.changeHandler} 
                posts={this.state.dummy}
                />
                <LogOut onClick={this.onClick}/>
                <PostContainer dummy={this.state.dummy} searchFilter={this.searchFilter} />
            </div>
        )
    }
}

export default PostsPage; 