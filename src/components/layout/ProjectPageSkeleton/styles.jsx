import styled, { keyframes } from "styled-components";


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

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding-inline: 2rem;

    height: 100px;
`

export const TitleContainer = styled.div`
    border-radius: 3px;
    height: 2rem;
    width: 100%;
    border-radius: 3px;
    background: var(--second-color);
    animation: ${SkeletonAnimation} .75s ease infinite;
`

export const Body = styled.section`
    display: flex;
    gap: 1rem;
    height: 100%;
    padding: 0rem 2rem 1rem 2rem;
`

export const Column = styled.div`
    width: 100%;
    min-width: 260px;
    background: var(--second-color);
    animation: ${SkeletonAnimation} .75s ease infinite;
    border-radius: 3px;
`