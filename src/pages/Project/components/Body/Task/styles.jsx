import styled from "styled-components";

import { priorityStyles } from '@styles/Miscellaneous'
  
export const Task = styled.div`
    background: #fff;

    display: flex;
    flex-direction: column;
    border-radius: 3px;
    box-shadow: 0px 0px 3px 0 #a9a8a8;

    margin-inline: .5rem;
    margin-bottom: .5rem;

    font-family: 'Main';
    font-size: .9rem;
    padding: 1rem;

    cursor: pointer;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const Priority = styled.span`
    ${({ priority }) => priorityStyles[priority] || {}}
    width: 40px;
    border-radius: 3px;
    height: 8px;
    margin-bottom: .5rem;
`

export const Name = styled.p`
    color: #626F86;
    word-wrap: break-word;
    width: 87%;
`



