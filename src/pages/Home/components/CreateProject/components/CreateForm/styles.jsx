import styled from "styled-components";

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    width: 280px;
    background: var(--grey);
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    color: var(--light-grey);
`

export const LogoText = styled.p`
    
`

export const Icon = styled(CreateNewFolderIcon)`
    
`

export const Hr = styled.hr`
    border: 1px solid #8f8d8d47;
    border-radius: 50%;
    margin-block: 1rem;
`

export const Label = styled.label`
    color: var(--light-grey);
    font-weight: bold;
    margin: 0;
    padding: 0;
    font-size: .8rem;
    margin-bottom: .3rem;

`
export const Input = styled.input`
    color: grey;
    background: var(--dark-grey);
    margin-bottom: 1rem;
    padding: .5rem ;
    border: 1px solid grey;
    border-radius: 5px;
    color: white;

    &:focus{
        outline: none;
    }

    font-family: 'Main';
`

export const Button = styled.button`
    padding: .5rem;
    font-family: 'Main';
    font-weight: bold;
    background: ${({ isLoading }) => isLoading ? 'grey;' : 'var(--fourth-color);'};
    border: none;
    color: var(--third-color);
    cursor: ${({ isLoading }) => isLoading ? '' : 'pointer'};
`