import * as S from './styles'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// Utils
import formatDate from '@utils/formatDate'
import userInitials from '@utils/userInitials'

// Components
import DeleteProject from '../Delete/Delete';
import { Menu } from '@components'

// Reducer
import { useSelector } from 'react-redux';

// Components
import { LoadingSpinner } from '@components'
import { MoreHoriz } from '@mui/icons-material';

// Hooks
import useIsAdmin from '@hooks/useIsAdmin'

const DotsMenu = () => {

    const { project, admin } = useSelector(state => state.projectReducer)
    const { isAdmin } = useIsAdmin();

    const clickable = <MoreHoriz/>
    const content =   <S.StyledMenu>
        <S.StyledMenuTitle>Menu</S.StyledMenuTitle>
        <S.Hr />
        <S.ItemContainer>
            <S.Label>
                <AccountCircleIcon />
                <S.LabelTitle>Administrador</S.LabelTitle>
            </S.Label>
            <S.AdminBox>
            {admin ?
                <>
                    <S.AdminIcon>{userInitials(admin.name, admin.lastName)}</S.AdminIcon>
                    <S.AdminSpan>
                        <S.AdminName>{admin.name}</S.AdminName>
                    </S.AdminSpan>
                </>
                :
                <LoadingSpinner/>
                }
            </S.AdminBox>
        </S.ItemContainer>

        <S.ItemContainer>
            <S.Label>
                <CalendarMonthIcon />
                <S.LabelTitle>Data de Criação</S.LabelTitle>
            </S.Label>
            <S.Text>{formatDate(project.createdAt)}</S.Text>
        </S.ItemContainer>
        {isAdmin && <DeleteProject/>}        
    </S.StyledMenu>

    const containerStyle = {
        marginLeft: 'auto',
    }
    
    const clickableStyle = {
        borderRadius: '5px',
        padding: '5px'
      }

    return (
        <Menu
        clickable={clickable}
        content={content}
        containerStyle={containerStyle}
        clickableStyle={clickableStyle}/>
    )
}

export default DotsMenu