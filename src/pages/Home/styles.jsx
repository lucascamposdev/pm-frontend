import styled from 'styled-components';

// Router
import {Link} from 'react-router-dom'

export const Container = styled.section`
    padding: 2rem;
    width: 100%;
    
    @media(max-width: 400px){
        padding: 1.5rem;
    }
`
export const Header = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export const Title = styled.h1`
    font-family: 'Second';
    color: var(--third-color);

    /* @media(max-width: 400px){
        font-size: 1rem;
    } */
`

export const LinkButton = styled(Link)`
    margin-left: auto;
`
