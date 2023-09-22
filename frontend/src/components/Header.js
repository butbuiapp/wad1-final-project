import '../css/Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.clear();
    navigate("/login");
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