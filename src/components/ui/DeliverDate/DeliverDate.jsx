import * as S from './styles'

import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const DeliverDate = ({ task, variant }) => {

  const dateString = task.deliverTime.slice(0, -1)
  const dateVal = new Date(dateString)
  
  return (
    <S.Container variant={variant}>
      <S.ClockIcon variant={variant}/>
      <S.Text variant={variant}>{format(dateVal, 'dd MMM', { locale: pt })}</S.Text>
    </S.Container>
  )
}

export default DeliverDate