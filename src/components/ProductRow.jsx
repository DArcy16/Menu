import React from 'react'

const ProductRow = ({name,price}) => {
  return (
    <div className='flex justify-between text-lg text-semibold'>
                <h2>{name}</h2>
                <h2>{price}</h2>
              </div>
  )
}

export default ProductRow