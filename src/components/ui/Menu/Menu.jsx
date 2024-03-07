import * as S from './styles'

// Components
import MUIMenu from '@mui/material/Menu';

// Hooks
import { useState } from 'react';

const Menu = ({ clickable, content, containerStyle, clickableStyle }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.Container style={containerStyle}>
      <S.Trigger onClick={handleClick} style={clickableStyle}>
        {clickable}
      </S.Trigger>
      <MUIMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}

        onBlur={handleClose}
        sx={{ '.MuiList-root': {
          padding: '0',
        },'.MuiMenuItem-root':{
          fontFamily: 'main',
          fontSize: '1rem'
        }}}
      >
          {content}
      </MUIMenu>
    </S.Container>
  )
}

export default Menu;