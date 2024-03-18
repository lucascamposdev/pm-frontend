import React from 'react'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
    <Box sx={{ display: 'grid', placeContent: 'center' }}>
      <CircularProgress sx={{ color: 'var(--third-color)'}}/>
    </Box>
  )
}

export default Spinner