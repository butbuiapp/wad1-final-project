import { useNavigate } from "react-router-dom";
import ConfirmDialog from "../modal/ConfirmDialog";
import { useState } from "react";
import '../css/Product.css';

function ProductDetails({ product, onDeleteProduct }) {
  const navigate = useNavigate();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  function editHandler() {
    navigate('/product/edit', { state: product })
  }

  function deleteHandler() {
    setShowConfirmDialog(true);
  }

  function deleteProduct() {
    onDeleteProduct(product.id);
  }

  function cancelHandler() {
    setShowConfirmDialog(false);
  }

  return (
    <>
      <div className='table-row'>
        <div className='table-body-cell'>{product.id}</div>
        <div className='table-body-cell'>{product.name}</div>
        <div className='table-body-cell'>{product.price}</div>
        <div className='table-body-cell'>{product.origin}</div>
        <div className='table-body-cell'>{product.instock ? 'Yes' : 'No'}</div>
        <div className='table-body-cell' style={{display: 'flex', gap: '10px'}}>
          <button onClick={editHandler} className="btn btn-edit small">&nbsp;Edit&nbsp;</button>
          <button onClick={deleteHandler} className="btn btn-cancel small">Delete</button>
        </div>
      </div>
      {showConfirmDialog && <ConfirmDialog
        message='Are you sure to delete this product?'
        onConfirm={deleteProduct}
        onCancel={cancelHandler}
      />}
    </>
  )
}

export default ProductDetails;