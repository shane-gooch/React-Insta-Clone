import React from 'react';
// import PostsPage from './components/PostContainer/PostsPage';
import './App.scss';
import withAuthenticate from './components/authentication/withAuthenticate';



const NewApp = withAuthenticate

class App extends React.Component {
  render(){
    return (
      <div>
        <NewApp />
      </div>
    );
  }
}

export default App;
