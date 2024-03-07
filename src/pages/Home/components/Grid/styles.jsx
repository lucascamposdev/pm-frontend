import styled, { keyframes } from "styled-components";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

export const Container = styled.section`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: min-content;
    overflow: auto;
    gap: .5rem;
    height: 84%;


    @media (max-width: 950px){
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));  
    }

    @media (max-width: 500px){
        grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));  
    }
`

export const Project = styled.div`
    position: relative;
    border-radius: 3px;
    height: 100px;
    padding: 1rem;
    overflow: hidden;

    background: var(--third-color);
    color:white;
    font-family: 'Main';
    cursor: pointer;
`

export const Icon = styled(FolderOpenIcon)`
    position: absolute;
    color: #ffffff1d;
    left: 0;
    top: 0;
    margin: 3rem;
    transform: scale(8);
`

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

export const Skeleton = styled.div`
    border-radius: 3px;
    height: 100px;
    padding: 1rem;

    background: var(--second-color);
    animation: ${SkeletonAnimation} .75s ease infinite;
`