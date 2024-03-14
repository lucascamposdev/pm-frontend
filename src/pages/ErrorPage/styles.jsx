import styled from "styled-components";

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from "react-router-dom";

export const Container = styled.section`
    padding: 2rem;
    width: 100%;

    display: grid;
    place-content: center;

    @media(max-width: 400px){
        padding: 1.5rem;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Icon = styled(SentimentVeryDissatisfiedIcon)`
color: var(--third-color);
`

export const Title = styled.h1`
    font-family: 'second';
    color: var(--third-color);
    margin-top: 1rem;
    font-size: 2rem;
`

export const Button = styled(Link)`
    margin-top: .5rem;

    border: 2px solid var(--third-color);
    border-radius: 5px;
    background: transparent;
    color: var(--third-color);
    font-family: 'main';
    padding: .5rem 1rem;
    font-weight: bold;
    font-size: 1rem;
`