import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    text-align: center;
    margin-top: 1rem;
`

export const Title = styled.h4`
    font-family: 'Second';
    color: var(--third-color);    
`

export const Disclaimer = styled.p`
    font-family: 'Main';
    color: var(--third-color);    
    font-size: .8rem;

    em{
        color:red;
    }
`

export const Wrapper = styled.div`
    display: flex;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-weight: bold;
    font-family: 'Main';

    height: 100px;
    width: 125px;
    width: 50%;

    margin: .5rem;
    border-radius: 3px;

    /* border: 1px solid #4480ae4c;
    color: #4480AE; */
    color:var(--third-color);
    border: 1px solid var(--third-color);
    cursor: pointer;

    &:hover{
        background: #02343028;;
    }
`