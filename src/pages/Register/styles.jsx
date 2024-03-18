import styled from "styled-components";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';

export const Title = styled.h1`
    font-family: 'Second';
    color: var(--third-color);
`

export const StyledButton = styled(Button)`
    
    && {
    background: var(--third-color);
    color: white; 
  }

    &&:hover{  
        background: var(--third-color); 
        filter: brightness(1.5);
    }
`
export const FormInput = styled(TextField)`

    .MuiInputLabel-root.Mui-focused {
    color: var(--third-color);
  }
  &&{
    .Mui-focused fieldset {
        border-color: var(--third-color); 
    }
  } 
`

export const Copyright = styled.div`
    margin-top: auto;
    font-size: .8rem;
    text-align: center;
    width: 100%;
    color: var(--grey);
`

export const StyledLink = styled(Link)`
    color: var(--third-color);
    font-size: .9rem;
`