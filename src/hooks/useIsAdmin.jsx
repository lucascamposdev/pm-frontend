import { useSelector } from "react-redux"

const useIsAdmin = () =>{
    const { auth } = useSelector(state => state.authReducer)
    const { project } = useSelector(state => state.projectReducer)

    const isAdmin = auth.id === project.userId
    return { isAdmin }
}

export default useIsAdmin