import '../css/Product.css';
import ProductDetails from './ProductDetails';

function ProductList({products, onDeleteProduct}) {
  // const products1 = [
  //   {
  //     id: "79ddd908-7ce1-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd918-7ce1-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd9065-7ce1-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79dde9065-7ce1-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79dddp065-7ce1-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd8065-7ce1-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd1065-7ce1-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd6065-7ce1-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd6065-7c11-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd6065-7ce3-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd6065-7ce9-4384-b9cc-8667ef09d045",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  //   {
  //     id: "79ddd6065-7ce9-4384-b9cc-8667ef09da45",
  //     name: "iphone 1",
  //     price: 100,
  //   },
  // ]
  // console.log(products1)
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