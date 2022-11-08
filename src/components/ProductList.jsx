import React, { useContext } from 'react'
import { MenuContext } from '../App'
import ProductGroup from './ProductGroup'
import logo from '../images/brand-logo.png'

const ProductList = ({products}) => {
    const {handleProductAdd} = useContext(MenuContext);
  


  return (
    <div className='w-1/2 p-4 flex justify-center preview'>
          <div className='w-2/3 mx-auto'>
            <div className='flex justify-center items-center'>
            <img src={logo} alt="Images" className='w-24 h-24' />
            </div>
            {/* Item Group */}
            {products.map((product) => (
              <ProductGroup key={product.id} 
              product={product}
              />
            ))}
            <button className="btn btn-sm mt-1" onClick={handleProductAdd}>Add New Product</button>
            
          </div>
        </div>
  )
}

export default ProductList