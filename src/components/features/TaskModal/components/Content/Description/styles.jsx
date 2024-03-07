import styled from "styled-components";

export const Form = styled.form`
`

export const Description = styled.textarea`
    width: 100%;

    font-family: 'main';
    padding: .5rem;
    
    border: none;
    margin-block: .3rem;
    font-size: 1rem;
    ${({ isAdmin }) => isAdmin ? '': 'resize: none; cursor:default;'}

    &:hover{
        ${({ isAdmin }) => isAdmin ? 'background: var(--second-color); cursor:pointer;': ''}    
    }
    &:focus{
        ${({ isAdmin }) => !isAdmin && 'outline: none;'}
        background: transparent;
    }


`

export const Button = styled.button`
    ${({ isSave }) => isSave === 'true' ? `
    background: var(--blue-color);
    color: white;
  ` : `
    background: white;
    color: black;
  `}
    font-family: 'main';
    padding: .5rem .8rem;
    margin-right: .5rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    &:hover{
        filter: brightness(0.9);
    }
`