import * as S from './styles'

import { Tooltip } from '@components'

import userInitials from '@utils/userInitials'

const Responsable = ({ task, variant }) => {

  const isResponsable = task.userId ? true : false

  return (
    <S.Container>
    <Tooltip
    title={isResponsable ? 
    `Responsável: ${task.responsable.name} ${task.responsable.lastName}` 
    : 'Sem Responsável'}>

    <S.Image isResponsable={isResponsable} variant={variant}>
      {isResponsable ? userInitials(task.responsable.name, task.responsable.lastName) : ''}
    </S.Image>

    </Tooltip>
    </S.Container>
  )
}

export default Responsable