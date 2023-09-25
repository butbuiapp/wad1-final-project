import '../css/Product.css';
import ProductDetails from './ProductDetails';

function ProductList({products, onDeleteProduct}) {
  return (
    <div className="product">
      <h1>Product List</h1>
      <div className='product-list'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Origin</th>
              <th>In stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            { products.map((prod) => (
                <ProductDetails
                  key={prod.id}
                  product={prod} 
                  onDeleteProduct={onDeleteProduct}/>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductList;