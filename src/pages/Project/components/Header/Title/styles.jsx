import styled, { keyframes} from "styled-components";

const screenSize = {
    small: '500px'
}

const SkeletonAnimation = keyframes`
    0%{
        opacity: .3;
    }   
    50%{
        opacity: 1;
    } 
    100%{
        opacity: .3;
    } 
`

// Title

export const TitleContainer = styled.div`
    align-items: center;
    border-radius: 3px;
    width: 100%; 

`

export const Title = styled.h1`
    display: inline-block;
    padding: .5rem;
    font-size: 1.2rem;

    cursor: pointer;
    font-family: 'Second';
    border-radius: 3px;


    &:hover{
        background: var(--second-color);
    }

    @media (max-width: ${screenSize.small}) {
    font-size: 1rem;
    }

`

export const TitleSkeleton = styled.div`
    border-radius: 3px;
    height: 2rem;
    width: 100%;
    max-width: 400px;
    border-radius: 3px;
    background: var(--second-color);
    animation: ${SkeletonAnimation} .75s ease infinite;
`

export const Input = styled.input`
    display: inline-block;
    width: 100%;
    max-width: 400px;

    border: none;
    font-family: 'Second';
    font-size: 1.2rem;
    font-weight: bold;
    padding: .5rem;

    @media (max-width: ${screenSize.small}) {
    font-size: 1rem;
    }
`
