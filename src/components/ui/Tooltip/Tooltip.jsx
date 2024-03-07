import MUITooltip from '@mui/material/Tooltip';

import React from 'react'

const Tooltip = ({ title, children, onClick}) => {
  return (
    <MUITooltip title={title} onClick={onClick} arrow>
        {children}
    </MUITooltip>
  )
}

export default Tooltip