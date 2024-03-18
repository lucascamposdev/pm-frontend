import * as S from './styles';
import { useEffect, useState } from "react";

import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

const Content = ({ children }) => {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
      const updateWindowSize = () => {
        setWindowSize(window.innerWidth);
      };
  
      window.addEventListener('resize', updateWindowSize);
  
      return () => {
        window.removeEventListener('resize', updateWindowSize);
      };
    }, []);

  return (
    <S.Content>
        {windowSize < 768 ?
        <S.HideContainer>
          <LaptopChromebookIcon sx={{ fontSize: '50px'}}/>
            <p>Por favor, utilize a versão Desktop para uma melhor experiência.</p>
        </S.HideContainer>
        :
        children
        }
    </S.Content>
  )
}

export default Content