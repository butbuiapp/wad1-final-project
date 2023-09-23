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
      <a
        href='/'
        style={{
        textDecoration: 'none',
        fontSize: '1.3rem',
        color: '#000'
        }}
      >
        Inventory Manager
      </a>
      <div>
        <button onClick={logoutHandler} className='btn medium'>Logout</button>
      </div>
    </div>
  )
}

export default Header;