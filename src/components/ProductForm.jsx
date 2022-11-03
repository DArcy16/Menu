

const ProductForm = ({selectedProduct}) => {
  console.log(selectedProduct);
    // const handleInputChange = (e, type) => {
    //     setNewProduct({...newProduct, [type]: e.target.value});
    // }


  return (
    <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
              <span className="label-text">Product Name</span>
              </label>
              <input 
                type='text'
                placeholder='Type Here'
                className='input input-bordered input-md w-full max-w-xs'
                value = {selectedProduct.name}
                // onChange={(e) => handleInputChange(e, 'name')}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
              <span className="label-text">Price</span>
              </label>
              <input 
                type='text'
                placeholder='Type Here'
                className='input input-bordered input-md w-full max-w-xs'
                value = {selectedProduct.price}
                // onChange = {(e) => handleInputChange(e, 'price')}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
              <span className="label-text">Category</span>
              </label>
            <select className="select select-bordered select-sm w-full max-w-xs">
              <option disabled selected>Select Category</option>
              <option>Drinks</option>
              <option>Pizza</option>
            </select>
            </div>
            <button className="btn btn-primary btn-sm mt-4">SAVE</button>
          </form>
  )
}

export default ProductForm