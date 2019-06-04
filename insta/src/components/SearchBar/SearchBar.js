import React from 'react';
import SearchForm from './SearchForm';

class SearchBar extends React.Component {
    state = {
        searchInput: ''
    };

    changeHanlder = e => {
        this.setState({
            searchInput: e.target.value
        });
    }

    render() {
        return (
            <div className='SearchBar'>
                <div className="icon-logo">
                    <img className='icon-ig' src='./assets/IG.png' alt='' />
                    <img className='icon-insta' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' alt='' />
               </div>
               <form>
                <SearchForm 
                
                />
               </form>
               <div className='icons'>
                    <img src='./assets/compass.png' alt='' />
                    <img src='./assets/heart-icon.png' alt='' />
                    <img src='./assets/person.png' alt='' />
                </div>
            </div>
        )
    }
   
}

export default SearchBar;