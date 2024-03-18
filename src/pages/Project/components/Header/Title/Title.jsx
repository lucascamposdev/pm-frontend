import * as S from './styles'

// Reducer
import { useDispatch } from 'react-redux'
import { update } from '@reducers/projectReducer'

// Hooks
import useEditable from "@hooks/useEditable"


const ProjectTitle = ({ project }) => {

    const dispatch = useDispatch();
    
    const submitNameChange = (e) =>{
        e.preventDefault();
        
        const changedName = e.target.value
        
        if ( changedName == project.name) return null
        
        const payload = {
            id: project.id,
            name: changedName,
        }
        
        dispatch(update(payload))
        closeEdition();
    }
    
    const { inputRef, isInput, openEdition, closeEdition } = useEditable(submitNameChange);
    
  return (
    <S.TitleContainer > 
        {isInput ?
            <S.Input 
            defaultValue={project.name} 
            onBlur={submitNameChange} 
            ref={inputRef} spellCheck={false}/>
            :
            <S.Title onClick={openEdition} >{project.name}</S.Title>
        }       
    </S.TitleContainer>
  )
}

export default ProjectTitle