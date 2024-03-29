import { useState } from 'react'
import * as S from './styles'

import Path from '../../../assets/images/icon-green.svg';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
  const [ isOpen, setIsOpen ] = useState(true)

  return (
    <S.Sidebar isOpen={isOpen}>
        {isOpen ?
        <S.Icon onClick={() => setIsOpen(!isOpen)}>
          <ChevronLeftIcon fontSize='large'/>
        </S.Icon>
        :
        <S.Icon onClick={() => setIsOpen(!isOpen)}>
          <ChevronRightIcon fontSize='large'/>
        </S.Icon>
        }

        <S.LinksContainer isOpen={isOpen}>
            <S.Header>
              <S.Logo src={Path} alt="logo" />
              <S.Hr/>
              <S.Label>Organização</S.Label>
            </S.Header>

            <S.StyledLink to='/'>
              <HomeIcon/>
              Início
            </S.StyledLink>

        </S.LinksContainer>  
    </S.Sidebar>
  )
}

export default Sidebar