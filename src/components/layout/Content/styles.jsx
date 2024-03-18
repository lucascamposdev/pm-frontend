import styled from "styled-components";

export const Content = styled.section`
    display: flex;
    width: 100%;
    height: calc(100vh - 55px);
`

export const HideContainer = styled.div`
    color: white;
    background: var(--third-color);
    width: 100%;

    font-family: 'main';
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding-inline: 1rem;
`