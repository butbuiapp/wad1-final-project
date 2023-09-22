import '../css/ConfirmDialog.css';

function ConfirmDialog(props) {

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className='confirm-dialog'>
      <div className='backdrop'>
        <div className='modal'>
          <p>{props.message}</p>
          <button className="btn btn-cancel" onClick={cancelHandler}>Cancel</button>
          <button className="btn ml" onClick={confirmHandler}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;