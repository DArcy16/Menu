import React from 'react'
import ProductRow from './ProductRow'

const ProductGroup = ( {product} ) => {
  return (
    <div className='mt-4'>
             <div className='flex justify-between text-2xl text-bold'>
                <h2>Category</h2>
                <h2>Price</h2>
               </div>
              <ProductRow name={product.name} price={product.price}/>
            </div>
  )
}

export default ProductGroup