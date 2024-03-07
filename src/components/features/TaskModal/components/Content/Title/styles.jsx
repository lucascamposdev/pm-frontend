import styled from "styled-components";

export const Title = styled.div`
    font-family: 'main';

    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 3px;
    word-wrap: break-word;

    padding: .5rem;

    &:hover{
        ${({ isAdmin }) => isAdmin ? `
        cursor: pointer;
        background: var(--second-color);  
        ` 
        : `cursor: default;`}      
    }
`
export const InputTitle = styled.input`
    font-size: 1.5rem;
    font-family: 'main';
    font-weight: bold;  
    width: 100%;

    padding: .5rem;
    &:focus{
        border:none;
    }
`