import styled from "styled-components"

import { FormControlLabel, FormGroup, MenuItem } from "@mui/material"

export const Container = styled.div`
`

export const Hr = styled.hr`
    opacity:.2 ;
`

export const StyledMenuItem = styled(MenuItem)`
    font-family: 'main';
    font-size: 5px;
`

export const Form = styled(FormGroup)`
    padding: .5rem;
    width: 200px;


    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const FormTitle = styled.p`
    font-family: 'main';
    margin-bottom: .4rem;
`

export const Label = styled(FormControlLabel)`
width: 100%;

.MuiTypography-root{
    font-family: 'main';
    font-size: 1rem;
}

&:hover{
    background: var(--second-color);
}

`
