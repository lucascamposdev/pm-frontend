import styled from "styled-components";

import AddCircleIcon from '@mui/icons-material/AddCircle';

import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';


export const Container = styled.div`
    border-radius: 3px;
    height: 100px;
    padding: 1rem;


    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--second-color);
    cursor: pointer;
    
    &:hover{
        background: #e7e5e5;
    }
`

export const AddIcon = styled(AddCircleIcon)`
    color: #cfcfcf;
    transform: scale(2.5);
`

export const StyledPopover = styled(Popover)`
    font-family: 'Main';

    .MuiPopover-paper{
        background: transparent;
    }
`

export const StyledItem = styled(MenuItem)`
`


