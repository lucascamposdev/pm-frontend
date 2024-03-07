import styled from "styled-components";
import WarningIcon from '@mui/icons-material/Warning';

export const Content = styled.div`
    background: white;
    font-family: 'Main';

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    padding: 30px;
    border-radius: 3px;
`

export const Icon = styled(WarningIcon)`
    color: var(--red-color);
`

export const Title = styled.p`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    gap: .5rem;
`

export const Text = styled.p`  
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: end;
    gap: .5rem;
`

export const Button = styled.button`
    padding: .5rem 1rem;
    border-radius: 3px;

    ${({ isTypeSubmit }) => isTypeSubmit ? 'border: none;' : 'border: 2px solid var(--light-grey);'};
    color: ${({ isTypeSubmit }) => isTypeSubmit ? 'white' : 'black'};
    background: ${({ isTypeSubmit }) => isTypeSubmit ? 'var(--red-color)' : 'white'};

    font-family: 'Main';
    font-weight: bold;
    cursor: pointer;

    &:hover{
        filter: brightness(0.9)
    }
`