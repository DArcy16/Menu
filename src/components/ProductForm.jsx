import { MenuContext , categories} from "../App";
import { useContext} from "react";

const ProductForm = ({selectedProduct}) => {
  const {handleProductDataChange} = useContext(MenuContext);
    const handleInputChange = (e) => {
        // setNewProduct({...newProduct, [type]: e.target.value});
        handleProductDataChange(selectedProduct.id, {
          ...selectedProduct,
          [e.target.name] : e.target.value,
        })

    }
    


  return (
    <form className="mt-1/2 w-2/3">
            <div className="form-control w-full">
              <label className="label">
              <span className="label-text">Product Name</span>
              </label>
              <input 
                type='text'
                placeholder='Type Here'
                className='input input-bordered input-md w-full'
                value = {selectedProduct.name}
                name = 'name'
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
              <span className="label-text">Price</span>
              </label>
              <input 
                type='number'
                placeholder='Type Here'
                className='input input-bordered input-md w-full'
                value = {selectedProduct.price}
                name = 'price'
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
              <span className="label-text">Category</span>
              </label>
            <select 
            name='category' 
            value={selectedProduct.category}
            onChange={(e) => {
              // setNewProduct({...newProduct, [type]: e.target.value});
              handleProductDataChange(selectedProduct.id, {
                ...selectedProduct,
                [e.target.name] : parseInt(e.target.value),
              })
      
          }}
            className="select select-bordered select-sm w-full"
            >
              <option disabled selected>Select Category</option>
              {categories.map((category) => (
                <option 
                value = {category.id}
                selected = {category.id === selectedProduct.category}
                > 
                {category.name}
                </option>
                ))}
            
            </select>
            </div>
            {/* <button className="btn btn-primary btn-sm mt-4">SAVE</button> */}
           
          </form>
  )
}

export default ProductForm