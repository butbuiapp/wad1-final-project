import '../css/Header.css';

function Header() {
  
  function logoutHandler() {

  }

  return (
    <div className='header_container'>
      <div>
        PRODUCT MANAGEMENT SYSTEM
      </div>
      <div>
        <button onClick={logoutHandler} className='btn'>Logout</button>
      </div>
    </div>
  )
}

export default Header;