import React from 'react';
import './App.scss';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
// import AddComment from './components/CommentSection/AddComment';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  state = {
    dummy: dummyData
  };
  
  render(){
    return (
      <div className="App">
        <SearchBar /> 
        <PostContainer dummy={this.state.dummy}/> 
        {/* <AddComment /> */}
      </div>
    );
  }
}

export default App;
