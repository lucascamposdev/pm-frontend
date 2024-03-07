import * as S from './styles'

// Reducer
import { useSelector, useDispatch } from 'react-redux'
import { update } from '@reducers/projectReducer'

// Hooks
import useEditable from "@hooks/useEditable"


const ProjectTitle = () => {
    const dispatch = useDispatch();

    const { project, loading } = useSelector(state => state.projectReducer)
    
    const submitNameChange = (e) =>{
        e.preventDefault();
        
        const changedName = e.target.value
        
        if ( changedName == project.name) return null
        
        const payload = {
            id: project.id,
            name: changedName,
        }
        
        dispatch(update(payload))
    }
    
    const { inputRef, isInput, openEdition, closeEdition } = useEditable(submitNameChange);
    
  return (
    <S.TitleContainer > 
        {project && !loading ? (isInput ?
            <S.Input defaultValue={project.name} onBlur={closeEdition} ref={inputRef} spellCheck={false}/>
            :
            <S.Title onClick={openEdition} >{project.name}</S.Title> )     
        : 
        <S.TitleSkeleton/>
        }       
    </S.TitleContainer>
  )
}

export default ProjectTitle