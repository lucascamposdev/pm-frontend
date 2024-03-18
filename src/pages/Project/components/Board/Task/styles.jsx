import styled from "styled-components";

import { priorityStyles } from '@styles/Miscellaneous'
  
export const Task = styled.div`
    background: #fff;

    position: relative;
    
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    box-shadow: 0px 0px 3px 0 #a9a8a8;

    margin-inline: .5rem;
    margin-bottom: .5rem;

    font-family: 'Main';
    font-size: .9rem;
    padding: 1rem;
    touch-action: none;

    cursor: pointer;

    ${({ isTransform }) => isTransform ? `
         &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #d1cdcd;
            box-shadow: 0px 0px 3px 0 #9d9c9c;
            border-radius: 3px;
        };
    ` : ''}
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: .5rem;

`

export const Priority = styled.span`
    ${({ priority }) => priorityStyles[priority] || {}}
    width: 40px;
    border-radius: 3px;
    height: 8px;
    margin-bottom: .5rem;
    cursor: default;
`

export const Name = styled.p`
    color: #626F86;
    width:85%;
    word-wrap: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
`



