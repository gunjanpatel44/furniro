import React from 'react'
import { FaStar } from 'react-icons/fa'

export default StarRating = ()  => {
  return(
    <div className='star-rating'>
    {[...Array(5)].map(star => {
      return <FaStar size={50} />
    } )}
    </div>
  )
}
