import { useEffect, useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import ProductGroup from './components/ProductGroup'
import logo from './images/brandlogo.jpg'
import {v4 as uuid} from 'uuid'
import ProductRow from './components/ProductRow'

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

const categories = [{
  id : 1,
  name : 'Drinks'
},
{
  id : 2,
  name : 'Cake',
},
{
  id : 3,
  name : 'Pizza',
}]

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [newProduct, setNewProduct] = useState({
    id : uuid(),
    name : '',
    price : '',
    category : '',
  });

  return (
    <main className='bg-gray-100 h-screen'>
      <div className="container h-full flex bg-white mx-auto">
        {/* add form */}
        <div className='w-1/2 p-4'>
          <AddForm newProduct={newProduct} setNewProduct={setNewProduct}></AddForm>
        </div>
        {/* preview */}
        <div className='w-1/2 p-4 flex justify-center preview'>
          <div className='w-2/3 mx-auto'>
            <div className='justify-center items-center'>
            <img src={logo} alt="Images" />
            </div>
            {/* Item Group */}
            {products.map((product) => {
              <ProductGroup key={product.id} product={product}></ProductGroup>
            })}
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
