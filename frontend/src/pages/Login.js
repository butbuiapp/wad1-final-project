import '../css/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayMessage from '../components/DisplayMessage';
import Layout from '../components/Layout';
import AuthService from '../services/AuthService';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [user, setUser] = useState({ email: '', password: '' });

  async function submitHandler(e) {
    e.preventDefault();

    const res = await AuthService.login(user.email, user.password);
    if (res) {
      if (res.success) {
        localStorage.setItem('token', res.data);
        navigate('/');
      } else {
        setError(res.error);
      }
    } else {
      setError('There is something wrong. Please try again.');
    }
  }

  function changeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className='login'>
      <div className='box'>
        <h1 className='ml'>Login</h1>
        <form method='post' onSubmit={submitHandler} >
          <div className='error_container'>
            {error && <DisplayMessage message={error} type="error" />}
          </div>
          <div className='form_control_wrapper'>
            <div className='form_control'>
              <label className="label">Email</label>
            </div>
            <div className='form_control'>
              <input type='email' name="email" onChange={changeHandler} required
                placeholder='Email' className='input' />
            </div>
          </div>
          <div className='form_control_wrapper'>
            <div className='form_control'>
              <label className="label">Password</label>
            </div>
            <div className='form_control'>
              <input type='password' name="password" onChange={changeHandler}
                required placeholder='Password' className='input' />
            </div>
          </div>
          <div className='actions'>
            <button className='btn ml'>Login</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login;