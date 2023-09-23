import '../css/Product.css';
import ProductDetails from './ProductDetails';

function ProductList({products, onDeleteProduct}) {

  return (
    <div className="product">
      <h3>Product List</h3>
      <div className='table'>
        <div className='table-header'>
          <div className='table-header-cell'>ID</div>
          <div className='table-header-cell'>Name</div>
          <div className='table-header-cell'>Price</div>
          <div className='table-header-cell'>Origin</div>
          <div className='table-header-cell'>In stock</div>
          <div className='table-header-cell'>Actions</div>
        </div>
        {products.map((prod) => (
          <ProductDetails
            key={prod.id}
            product={prod} 
            onDeleteProduct={onDeleteProduct}/>
        ))
        }
      </div>
    </div>
  )
}

export default ProductList;