import styled from "styled-components";

import { priorityStyles } from '@styles/Miscellaneous'

export const Priority = styled.span`
    ${({ priority }) => priorityStyles[priority] || {}}
    width: 40px;
    border-radius: 3px;
    height: 8px;
    margin-bottom: .5rem;
    margin-left: .5rem;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    gap: .5rem;
    svg:hover{
        background: var(--second-color);
        cursor: pointer;

    }
`

export const Status = styled.p`
    color: grey;
    font-family: 'verdana';
    font-size: .8rem;

    padding-inline: .5rem;
`

export const Label = styled.label`
    margin-top: 1rem;
    font-family: 'main';
    font-weight: bold;
    padding-inline: .5rem;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-block: 1rem;
`