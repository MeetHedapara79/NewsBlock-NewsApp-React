import React from 'react'
import loader from '../Spinner.gif'

const Spinner = () => {

  return (
    <div className='text-center'>
      <img style={{ width: "4rem" }} src={loader} alt="Spinner" />
    </div>
  )
}
export default Spinner