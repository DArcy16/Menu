import React from 'react'
import ProductRow from './ProductRow'

const ProductGroup = ({product}) => {
  return (
    <div className='mt-4'>
             <div className='flex justify-between text-2xl text-bold'>
                <h2>Category</h2>
                <h2>Price</h2>
               </div>
               <div className="collapse">
                  <input type="checkbox" /> 
                  
                    <ProductRow product={product} />
                  
            </div>
              
            </div>
  )
}

export default ProductGroup