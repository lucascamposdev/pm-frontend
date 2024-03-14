import * as S from './styles'
import { IconButton } from '@mui/material'

// React
import { useState, useEffect } from 'react'

// Reducer
import { useSelector, useDispatch } from 'react-redux'
import { getprofile } from '@reducers/userReducer'

// Components
import Dropdown from './Dropdown'

// Utils
import userInitials from '@utils/userInitials'

const Settings = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { auth } = useSelector(state => state.authReducer)
  const { profile } = useSelector(state => state.userReducer)

  const dispatch = useDispatch();

  useEffect(() =>{
    if(auth){
      dispatch(getprofile(auth.id))
    }
  }, [auth])

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <S.Settings title="Configurações" >
        <IconButton onClick={handleClick} sx={{ marginLeft: 'auto' }}>
          {profile ? 
          <S.Avatar>{userInitials(profile.name, profile.lastName)}</S.Avatar>
          :
          <S.Avatar></S.Avatar>
          }        
        </IconButton>
      </S.Settings >

      {profile &&
      <S.StyledPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
          <Dropdown profile={profile} handleClose={handleClose}/>
      </S.StyledPopover>
      }
    </>
  )
}

export default Settings