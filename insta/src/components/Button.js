import styled, { css } from 'styled-components';


export const Button = styled.button`
    background: transparent;
    border-radius: 10px;
    padding: 5px;  
    cursor: pointer; 

    &:hover{
        padding: 6px; 
    }

    ${props => 
        props.standard &&
        css`
            color: black;  
        `}
`;