import styled, {keyframes} from "styled-components";

const showUp = keyframes`
    from{
        opacity: 0;
        margin-top: -20px;
    }
    to{
        opacity: 1;
    }
`

export const Container = styled.section`
    background: white;

    padding: 1rem;
    padding-right: 1.5rem;
    border-radius: 3px;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 600px;

    animation: ${showUp} .25s ease;
`