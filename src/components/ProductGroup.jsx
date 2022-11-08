import React from 'react'
import ProductRow from './ProductRow'
import { categories } from '../App'

const ProductGroup = ({product}) => {
  const currentCategory = categories.find(
    (category) => category.id === product.category
  )
  return (
    <div className='mt-4'>
             <div className='flex justify-between text-2xl text-bold'>
                <h2>{currentCategory?.name}</h2>
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