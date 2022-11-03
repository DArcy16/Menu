import React, { useContext } from 'react'
import { MenuContext } from '../App'

const ProductRow = ({product}) => {
  const {handleProductDelete, handleProductSelect} = useContext(MenuContext);
  return (
    <>
     <div className="collapse-title text-xl font-medium">
      <div className='flex justify-between text-lg text-semibold'>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
              </div>
      </div>
                  <div className="collapse-content flex justify-end">
                    
                      <button className="btn btn-primary btn-xs mr-1" onClick={()=>handleProductSelect(product.id)}>Edit</button>
                      <button className="btn btn-error btn-xs" onClick={()=>handleProductDelete(product.id)}>Del</button>
                    
                  </div>
    </>
   
    
  )
}

export default ProductRow