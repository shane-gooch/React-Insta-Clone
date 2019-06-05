import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    state = {
        dummy: []
    }

    componentDidMount() {
        this.setState({
            dummy:dummyData
        });
    }

    render() {
        return(
            <div className="PostsPage">
                <SearchBar />
                <PostContainer dummy={this.state.dummy} />
            </div>
        )
    }
}

export default PostsPage; 