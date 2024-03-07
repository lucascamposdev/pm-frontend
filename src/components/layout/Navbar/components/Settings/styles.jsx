import styled from "styled-components";

import { Popover, Tooltip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Settings = styled(Tooltip)`
    display: flex;
`

export const Avatar = styled.div`
    background: var(--fourth-color);
    height: 38px;
    width: 38px;
    border-radius: 50%;


    display: grid;
    place-content: center;
    font-family: 'Main';
    font-size: 1rem;
    color: var(--third-color);

`

export const StyledPopover = styled(Popover)`
    color: white;
    font-family: 'Main';
    border-radius: 5px;

    .MuiPopover-paper{
        background: transparent;
    }
`

export const Dropdown = styled.div`
    background: var(--grey);
    font-family: 'Main';
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    overflow: hidden;
    width: 300px;
`
export const UserIcon = styled(AccountCircleIcon)`
    margin-top: 1.5rem;
    transform: scale(1.5);
    margin-bottom: 1rem;
    color: ${({ access }) => access == 2 ? 'var(--orange-color);' : 'var(--fourth-color);'};
`

export const Username = styled.h1`
    font-style: normal; 
    font-size: 1.25rem;
`

export const Rank = styled.p`
    font-style: normal;
    font-weight: 100;
    color: ${({ access }) => access == 2 ? 'var(--orange-color);' : 'var(--fourth-color);'};
    margin-bottom: .5rem;
`

export const Email = styled.p`
    font-style: normal;
    font-weight: 100;
    margin-bottom: .5rem;
`

export const Logout = styled.span`
    background: var(--second-color);
    color: var(--dark-grey);
    padding: 1rem;
    margin-top: 1rem;
    width: 100%;
    cursor: pointer;

    &:hover{
        background: var(--light-grey);
    }
`