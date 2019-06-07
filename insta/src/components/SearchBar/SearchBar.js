import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex
    align-items: center;  
    width: 100%; 
`
const SmallIcon = styled.img`
    height: 30px;
    width: 28px; 
    padding: 5px; 

`

const BigIcon = styled.img`
    height: 30px;
    width: 115px; 
`

const SearchInput = styled.input`
    padding: 6px; 
`

const SearchBar = props => {
        
            return (
                    <div>
                    <HeaderDiv>
                        <div className="icon-logo">
                            <img className='icon-ig' src='./assets/IG.png' alt='' />
                            <BigIcon src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' alt=''></BigIcon>
                        </div>
                        <div>
                        <SearchInput
                            type='text'
                            name='search'
                            placeholder='search...'
                            onChange={props.changeHandler}
                            value={props.input}
                        />
                        </div>
                        <div>
                            <SmallIcon src='./assets/compass.png' alt=''/>
                            <SmallIcon src='./assets/heart-icon.png' alt='' />
                            <SmallIcon src='./assets/person.png' alt='' />
                        </div>
                    </HeaderDiv>
                    </div>
                )
        }


export default SearchBar;