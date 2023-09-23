import { useState, useRef, useEffect } from 'react';
import '../css/Product.css';
import DisplayMessage from '../components/DisplayMessage';
import ProductService from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
import { useValidate } from '../helper/useValidate';

function NewProduct() {
  const navigate = useNavigate();
  const [ error, setError, validate ] = useValidate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    origin: "",
    instock: true
  });
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  async function addProductHandler(e) {
    e.preventDefault();

    // validate
    if (validate(product)) {
      const res = await ProductService.addProduct({...product});
      if (res) {
        if (res.success) {
          // go to product list
          navigate("/");
        } else {
          setError(res.error);
        }
      } else {
        setError('There is something wrong. Please try again.');
      }
    }
  }

  function cancelHandler() {
    // back to product list
    navigate("/");
  }

  function changeHandler(e) {
    setProduct({ ...product, [e.target.name]: e.target.value.trim() });
  }

  return (
    <div className="add-product">
      <div className="box">
        <h1>Add New Product</h1>
        <form method='post' onSubmit={addProductHandler}>
          <div className="error_container">
            {error && <DisplayMessage message={error} type="error" />}
          </div>
          <div className="form_control_wrapper">
            <div className="form_control">
              <label className="label">Name</label>
            </div>
            <div className="form_control">
              <input type="text" name="name" value={product.name} ref={nameRef}
                onChange={changeHandler} required className="input-text" />
            </div>
          </div>

          <div className="form_control_wrapper">
            <div className="form_control">
              <label className="label">Price</label>
            </div>
            <div className="form_control">
              <input type="text" name="price" value={product.price}
                onChange={changeHandler} required className="input-text" />
            </div>
          </div>

          <div className="form_control_wrapper">
            <div className="form_control">
              <label className="label">Origin</label>
            </div>
            <div className="form_control">
              <input type="text" name="origin" value={product.origin}
                onChange={changeHandler} required
                className="input-text" />
            </div>
          </div>

          <div className="form_control_wrapper">
            <div className="form_control">
              <label className="label">In Stock</label>
            </div>
            <div className="form_control">
              <select className="select" name="instock"
                value={product.instock} onChange={changeHandler}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          
          <div className="actions">
            <button onClick={addProductHandler} className="btn btn-edit medium">Save</button>
            <button onClick={cancelHandler} className="btn btn-cancel medium ml">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewProduct;