import styled, { keyframes, css} from "styled-components";

import { Link } from "react-router-dom";

const screenSize = {
    small: "800px"
}

export const Sidebar = styled.aside`
    background: var(--second-color);

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35px;
    padding-top: 15px;
    transition: all .50s ease;

    position: relative;

    ${({ isOpen }) =>
    isOpen && 'width: 150px;'}
        

    @media(max-width: ${screenSize.small}){
        font-size: 12px;
    }
`

export const Icon = styled.div`
    display: grid;
    place-content: center;
    color: var(--third-color);
    cursor: pointer;

    position: absolute;
    top: 25px;
    right: -12px;
    border-radius: 50%;
    background: var(--second-color);
    box-shadow: 0px 0px 3px 0px;
    z-index: 1;

    svg{
        width: 25px;
        height: 25px;
    }
` 

export const Header = styled.div`
    color: var(--third-color);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem 1rem;

    width: 100%;

    i{
        font-size: 1.25rem;
        margin: 0;
        padding: 0;
    }

    @media(max-width: ${screenSize.small}){
        i{
            font-size: 11px;
        }
        p{
            font-size: 9px;
        }
    }
`

export const Logo = styled.img`
    width: 25px;
    margin: auto;
`

export const Hr = styled.hr`
    margin-block: 1rem;
    border: 1px solid #ddd;
`

export const Label = styled.p`
    font-family: 'Main';
    font-size: .8rem;
    text-transform: uppercase;
    padding: 0;

    @media(max-width: ${screenSize.small}){
        font-size: 9px;
    }
`

const showLinks = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
        visibility: visible;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    visibility: hidden;
    flex-direction: column;
    width: 100%;
    opacity: 0;
    overflow: hidden;

    ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${showLinks} 0.5s ease forwards;
    `}

`

export const StyledLink = styled(Link)`
    text-decoration: none;
    padding: .5rem 1rem;
    font-family: 'Main';
    min-width: 150px;
    width: 100%;

    display: flex;
    align-items: center;
    gap: .5rem;

    svg{
        color: var(--third-color);
    }

    &:hover{
        background: rgb(222, 221, 221);
        color: var(--blue-color);
    }

    &:focus{
        font-weight: bold;
        color: var(--blue-color);
        background: #E3FCF7;  
    }
`





