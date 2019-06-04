import React from 'react';
import './App.scss';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  state = {
    dummy: []
  }

  componentDidMount() {
    this.setState({
      dummy: dummyData
    }); 
  }

  changeHanlder = e => {
    e.preventDefault();
      this.setState({
        commentInput: e.target.value
      })
  }
  
  render(){
    return (
      <div className="App">
        <SearchBar /> 
        <PostContainer dummy={this.state.dummy}/> 
      </div>
    );
  }
}

export default App;
