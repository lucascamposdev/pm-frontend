import React from 'react'

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const LoadingButton = ({ name, loading }) => {
  return (
    <>
    {loading ? 
    <button className='form-button' type='submit' disabled><LoadingSpinner/></button>
    :
    <button className='form-button' type='submit'>{name}</button>
    }
    </>
  )
}

export default LoadingButton