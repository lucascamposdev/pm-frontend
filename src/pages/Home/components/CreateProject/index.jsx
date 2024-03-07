import * as S from './styles'
import * as React from 'react'

import CreateForm from './components/CreateForm/CreateForm'

const CreateProject = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
    <S.Container  onClick={handleClick}>
      <S.AddIcon aria-describedby={id}/>
    </S.Container>
    {open && 
    <S.StyledPopover
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'center',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    >
        <CreateForm/>
      </S.StyledPopover>
      }
      </>
  )
}

export default CreateProject;