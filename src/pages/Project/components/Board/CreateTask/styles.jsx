import styled from "styled-components";

export const CreateButton = styled.div`
    display: flex;
    align-items: center;

    gap: .5rem;

    cursor: pointer;

    font-family: 'Main';
    border-radius: 3px;

    margin-bottom: .5rem;

    padding-inline: .5rem;
    padding: .5rem;
    
    &:hover{
        background: #ddd;
    }

    svg{
        width: 23px;
    }
`

export const Form = styled.form`
    
`

export const Input = styled.input`
    font-family: 'Main';
    border-radius: 3px;

    margin-bottom: .5rem;

    padding-inline: .5rem;
    padding: .5rem;
    
    height: 43.42px;

    width: 100% ;
    
    &:focus{
        border: 2px solid var(--blue-color);
        outline: none;
    }
`