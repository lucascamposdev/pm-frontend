import * as S from './styles'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers';

const DatePicker = ({ onChangeFunc }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MUIDatePicker']}>
        <MUIDatePicker 
        label="Basic date picker" 
        onChange={onChangeFunc}
        defaultDate={new Date()}
        format='DD/MM/YYYY'
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DatePicker