import styled from "styled-components";

export const DeleteButton = styled.button`
    background: var(--dark-grey);
    color: white;
    display: block;
    border: none;
    border-radius: 3px;
    padding:.5rem 1rem;
    font-family: 'Main';
    cursor: pointer;

    margin-top: 1rem;
`

export const ConfirmContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`

export const Option = styled.button`
    display: block;
    padding: .5rem 1rem;
    background: #d41c1c42;
    color:white;
    font-family: 'Main';
    border-radius: 3px;
    width: 50%;
    border: 1px solid #bb2a2a;
    cursor: pointer;
`