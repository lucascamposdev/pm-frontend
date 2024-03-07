import styled from "styled-components";

export const Container = styled.span`
    margin-left: auto;
    cursor: pointer;
`

export const Image = styled.span`
    font-family: 'main';

    font-size: .8rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: auto;
    display: grid;
    place-content: center;
    color:white;

    background: ${({ isResponsable }) => isResponsable ? 'var(--third-color)' : 'var(--second-color)'};
`