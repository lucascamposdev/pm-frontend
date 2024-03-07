import { useState, useRef, useLayoutEffect } from "react";

import useIsAdmin from "@hooks/useIsAdmin"

const useEditable = () => {
    const [ isInput, setIsInput ] = useState(false);
    const inputRef = useRef(null)
    const { isAdmin } = useIsAdmin();

    const openEdition = () => {
        if(!isAdmin) return null
        setIsInput(true)       
    }

    const closeEdition = () =>{
        setIsInput(false)
    }

    const closeEditionWithButtons = (e) =>{
        if (e.relatedTarget && e.relatedTarget.tagName === 'BUTTON') {
            return;
          }
          setIsInput(false)
    }

    useLayoutEffect(() =>{
        if(isInput) inputRef.current.focus();
    }, [isInput])

    return {
        inputRef,
        isInput,
        openEdition,
        closeEdition,
        closeEditionWithButtons
    }
}

export default useEditable;