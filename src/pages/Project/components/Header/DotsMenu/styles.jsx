import styled from "styled-components";

// Dots Menu
export const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--grey);
    color: #ddd;

    padding: 1rem;
    font-size: .9rem;
    width: 300px;
    font-family: 'main';
`

export const StyledMenuTitle = styled.p`
    text-align: center;
    margin-bottom: 1rem;
`

export const Hr = styled.hr`
    border: 1px solid #dddddd18;
`

// Item
export const ItemContainer = styled.div`
    margin-top: 1rem;

    svg{
        color: grey;
        height: 20px;
    }
`

export const Label = styled.div`
    display: flex;
    align-items: center;
    gap: .3rem;
    margin-bottom: .5rem;
`

export const LabelTitle = styled.p`
    font-size: .8rem;
    color: var(--light-grey);
`

export const Text = styled.p`
 display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    
    padding-block: 1rem;
    border: 1px solid #dddddd22;
`

// Admin Box
export const AdminBox = styled.div`
    padding-block: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    border: 1px solid #dddddd22;
    border-radius: 5px;
`

export const AdminIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 50px;
    border-radius: 50%;

    font-size: 1rem;
    background: var(--blue-color);
    color:white;
`

export const AdminSpan = styled.span`
   display: flex;
   flex-direction: column;
`

export const AdminName = styled.p`
    font-size: 1.2rem;
`

export const AdminFullname = styled.p`
    color: grey;
`

