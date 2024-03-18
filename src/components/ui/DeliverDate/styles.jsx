import styled from "styled-components";

import AccessTimeIcon from '@mui/icons-material/AccessTime';

const screenSize = {
    small: '800px',
    medium: '1024px',
    large: '1200px',
  };

export const Container = styled.span`
    display: flex;
    align-items: center;
    gap: .5rem;
    color:#6d7a93;
    border-radius: 3px;

    padding: .3rem .5rem;
    background-color: var(--second-color);
    

    ${({ variant }) => variant === 'small' ? 
    `cursor: default;`: 
    `margin-left: .5rem;`
    }

    
`

export const ClockIcon = styled(AccessTimeIcon)`
${({ variant }) => variant === 'small' ? 
`font-size: 18px !important;`: 'font-size: 20px !important'}

@media (max-width: ${screenSize.small}) {
    font-size: 12px !important;
  }
`

export const Text = styled.p`
font-family: 'main';
${({ variant }) => variant === 'small' ? 
`font-size: 15px !important;`: 'font-size: 20px !important'}

@media (max-width: ${screenSize.small}) {
    font-size: 12px !important;
  }

`