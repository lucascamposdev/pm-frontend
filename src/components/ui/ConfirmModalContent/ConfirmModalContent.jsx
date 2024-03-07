import * as S from './styles'
import React from 'react';

import {useModal} from '@context/modalContext'


const ConfirmModalContent = React.forwardRef((props, ref) => {

    const { closeModal } = useModal();
    
  return (
    <S.Content>
        <S.Title>
        <S.Icon/>
        Excluir {props.title} ?
        </S.Title>
        <S.Text>
        Você está prestes a excluir permanentemente este item, 
        bem como todos os dados dele.
        <br/>
        <br/>
        Se você não tem certeza de que deseja fazer isso, resolva ou feche este item.
        </S.Text>
        <S.Wrapper>
          <S.Button onClick={closeModal}>Cancelar</S.Button>
          <S.Button onClick={props.handleSubmit} isTypeSubmit={true}>Confirmar</S.Button>
        </S.Wrapper>
    </S.Content>
  )
})

export default ConfirmModalContent