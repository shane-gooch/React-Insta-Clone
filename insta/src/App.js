import React from 'react';
// import PostsPage from './components/PostContainer/PostsPage';



import './App.scss';
import Login from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';


const NewApp = withAuthenticate

class App extends React.Component {
  render(){
    return (
        <NewApp />
        
    );
  }
}

export default App;
