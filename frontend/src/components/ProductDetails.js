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
      <tr className="list-item">
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.origin}</td>
        <td>{product.instock==="true" ? 'Yes' : 'No'}</td>
        <td>
          <div style={{display: 'flex', gap: '10px'}}>
            <button onClick={editHandler} className="btn btn-edit small">Edit</button>
            <button onClick={deleteHandler} className="btn btn-cancel small">Delete</button>
          </div>
        </td>
      </tr>

      {showConfirmDialog && <ConfirmDialog
        message='Are you sure to delete this product?'
        onConfirm={deleteProduct}
        onCancel={cancelHandler}
      />}
    </>
  )
}

export default ProductDetails;