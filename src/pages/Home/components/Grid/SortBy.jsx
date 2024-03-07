import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const SortBy = ({ projects, setList, isLoading }) => {
    const [ selected, setSelected ] = useState('dateAsc')

    const handleChange = (e) =>{
        const option = e.target.value
        setSelected(option)
        let sortedList = [...projects];
            if (option === 'alphabeticAsc') {
                sortedList.sort((a, b) => a.name.localeCompare(b.name));
            } 
            else if (option === 'dateAsc') {
                sortedList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            } 
            else if (option === 'dateDesc') {
                sortedList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            }  
             else if (option === 'alphabeticDesc') {
                sortedList.sort((a, b) => b.name.localeCompare(a.name));
            }
            setList(sortedList);
    }

  return (
    <Box sx={{ width: 175, marginBlock: '1rem' }}>
    <FormControl  fullWidth>
      <InputLabel id="demo-simple-select-label">Ordem</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        onChange={handleChange}
        label='Ordem'
        disabled={isLoading ? true : false}
      >
        <MenuItem value='dateAsc'>Mais Antigo</MenuItem>
        <MenuItem value='dateDesc'>Mais Novo</MenuItem>
        <MenuItem value='alphabeticAsc'>Alfabética (A-Z)</MenuItem>
        <MenuItem value='alphabeticDesc'>Alfabética (Z-A)</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default SortBy;