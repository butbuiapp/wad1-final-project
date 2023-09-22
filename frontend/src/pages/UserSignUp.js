import '../css/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayMessage from '../components/DisplayMessage';
import Footer from '../components/Footer';
import UserService from '../services/UserService';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [user, setUser] = useState({ email: '', password: '', confirmPassword: '' });

  async function submitHandler(e) {
    const { password, email} = user;
    e.preventDefault();

    if(!validatePassword()) return;

    const res = await UserService.singup({ email, password });
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

  const validatePassword = () => {
    const hasLengthOf10 = new RegExp('(?=.{10,})');
    const hasOneLowerCase = new RegExp('(?=.*[a-z])');
    const hasOneUpperCase = new RegExp('(?=.*[A-Z])');
    const hasOneSpecialChar = new RegExp('(?=.*[^A-Za-z0-9])');

    let errorList = '';
    if(user.password !== user.confirmPassword) {
      errorList += 'Passwords do not match';
      setError(errorList);
      return;
    }

    if(!hasLengthOf10.test(user.password)) {
      errorList += '\n password should be at least 10 letters or digits';
    }

    if(!hasOneLowerCase.test(user.password)) {
      errorList += '\n Password should contain at least a lower case letter';
    }

    if(!hasOneUpperCase.test(user.password)) {
      errorList += '\n Password should contain at least a upper case letter';
    }

    if(!hasOneSpecialChar.test(user.password)) {
      errorList += '\n Password should contain at least a special case letter';
    }

    if(errorList) {
      setError(errorList);
    }

    return (errorList === '');
  }

  return (
    <div className='login'>
      <div className='box'>
        <h1 className='ml'>Create account</h1>
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

          <div className='form_control_wrapper'>
            <div className='form_control'>
              <label className="label">Confirm password </label>
            </div>
            <div className='form_control'>
              <input type='password' name="confirmPassword" onChange={changeHandler}
                required placeholder='Confirm password' className='input' />
            </div>
          </div>

          <div className='actions'>
            <button className='btn ml'>Create account</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login;