import * as S from './styles'

// Reducer
import { useDispatch } from 'react-redux'
import { logout } from '@reducers/authReducer'

// Utils
import {AccessName} from '@utils/AccessName'

const Dropdown = ({ profile, handleClose }) => {

    const dispatch = useDispatch()
  
    const handleLogout = () =>{
      dispatch(logout())
    }

  return (
    <S.Dropdown>
        <S.UserIcon access={profile.access}/>
        <S.Username>{profile.name}</S.Username>
        <S.Rank access={profile.access}>{AccessName(profile.access)}</S.Rank>
        <S.Email>{profile.email}</S.Email>

        <S.Logout onClick={handleLogout}>Log out</S.Logout>
  </S.Dropdown>   
  )
}

export default Dropdown