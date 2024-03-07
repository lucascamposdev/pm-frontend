import styled from "styled-components";

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    max-height: 100%;
    background: var(--second-color);
    border-radius: 3px;

    overflow-y: auto;
    box-shadow: 0px 0px 3px 0 #a9a8a8;
    scrollbar-width: none;
    -ms-overflow-style: none; 
    user-select: none;

`

export const Header = styled.div`
    padding-inline: 10px ;
    position: sticky;
    top: 0;
    background: var(--second-color);
`

export const Title = styled.p`
    font-family: 'Main';
    padding: 1rem .5rem;
`
