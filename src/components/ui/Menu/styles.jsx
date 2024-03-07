import styled from "styled-components";

export const Container = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Trigger = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    cursor: pointer;
    &:hover{
        background: var(--second-color);
    }

    .MuiMenuItem-root{
        font-family: 'main';
        color:white;
    }
    .MuiButtonBase-root{
        color:white;
    }
    .MuiButtonBase-root-MuiMenuItem-root{
        color:white;
    }
`