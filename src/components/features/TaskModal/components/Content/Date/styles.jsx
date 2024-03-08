import styled from "styled-components";

export const AddDate = styled.button`
    background: var(--second-color);

    font-family: 'main';
    padding: .5rem .8rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    &:hover{
        filter: brightness(0.9);
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: .5rem;
`

export const Button = styled.button`
    ${({ isSave }) => isSave === 'true' ? `
    background: var(--blue-color);
    color: white;
  ` : `
    background: white;
    color: black;
  `}
    font-family: 'main';
    padding: .5rem .8rem;
    margin-right: .5rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    &:hover{
        filter: brightness(0.9);
    }
`

export const ShowDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: .5rem;
`
export const Label = styled.label`
    font-family: 'main';
    font-weight: bold;
    padding-inline: .5rem;
    font-size: .9rem;
`

export const DateContainer = styled.span`
    ${({ isAdmin }) => !isAdmin ? 
    `cursor: default;`: 
    `&:hover{
        filter: brightness(.95);
        cursor: pointer;
    }`
    }
`