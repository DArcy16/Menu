import { createContext, useEffect, useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

import {v4 as uuid} from 'uuid'

const sampleProducts = [{
  id : 1,
  name : 'Latte',
  price : '4000',
  category : 1
},
{
  id : 2,
  name : 'Americano',
  price : '3100',
  category : 1  
},
{
  id : 3,
  name : 'Expresso',
  price : '3500',
  category : 1
},
{
  id : 4,
  name : 'Pizza',
  price : '9000',
  category : 3
}]

export const categories = [
  {
    id: 1,
    name: 'Drinks 🧃',
  },
  {
    id: 2,
    name: 'Cake 🍰',
  },
  {
    id: 3,
    name: 'Pizza 🍕',
  },
];

export const MenuContext = createContext();

const STORAGE_KEY = 'menuapp.products';

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [selectedProductId, setSelectedProductId] = useState();
  const [showError, setShowError] = useState(false);
  

  useEffect(() => {
    const productsJSON = localStorage.getItem(STORAGE_KEY);
    if  (productsJSON !== null) setProducts(JSON.parse(productsJSON));
  },[])
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));

  }, [products])

  
  
  
  
  function handleProductAdd() {
    const newProduct = {
      id : uuid(),
      name : '',
      price : '',
      category : '',
    };
    setProducts([...products, newProduct]);
    setSelectedProductId(newProduct.id)
  }

  function handleProductDataChange(id, updatedData) {
    const newProducts = [...products];
    const productIndex = newProducts.findIndex((product) => product.id === id)
    newProducts[productIndex] = updatedData;
    setProducts(newProducts)
  }
  
  function handleProductDelete(id) {
    setProducts(products.filter(product => product.id !== id))
    setShowError(true);
    setTimeout( () => setShowError(false), 1300)
  }
  
  function handleProductSelect(id) {
    setSelectedProductId(id);
  }

  const selectedProduct = products.find((product) => (product.id === selectedProductId));

    const menuContextValue = {
      handleProductAdd,
      handleProductDelete,
      handleProductSelect,
      handleProductDataChange
    }


  return (
    <MenuContext.Provider value={menuContextValue}>
      <main className='bg-gray-100 h-screen'>
      <div className="container h-full flex bg-white mx-auto">
        {/* add form */}
        <div className='w-1/2 p-4 flex justify-center'>
          { selectedProduct && <ProductForm selectedProduct={selectedProduct}/> }
        </div>
        {/* preview */}
        <ProductList products={products}/>
      </div>
    </main>
    {showError && (
      <div className="toast toast-top toast-end">
      <div className="alert alert-error">
        <div>
          <span>Product Deleted ☠️</span>
        </div>
      </div>
    </div>
    )}
    </MenuContext.Provider>
  )
}

export default App
