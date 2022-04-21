import React, { useState } from 'react';
import { useGlobalHook, AuthContext } from '../../context/context';

const Login = () => {
  const { loginHandler } = useGlobalHook(AuthContext);
  const [ form, setForm ] = useState({
    email: '',
    password: '',
  });

  return (
    <section className='section section-login bg-section' style={{ backgroundImage: `url(../images/background-image.jpg)`}}>
      <div className='center-box'>
        <form className='form form-login' onSubmit={(event) => loginHandler(event, form)}>
          <div className='form-group'>
            <h1>Login</h1>
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type={'email'} id='email' autoComplete='on' name='email' value={form?.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type={'password'} id='password' autoComplete='on' name='password' value={form?.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </div>        

          <div className='form-group'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login;














/*
<button type='button' onClick={() => navigation('/')}>Back to Home</butto{n>
<button type='button' onClick={() => navigation('/users')}>Go on users</button>
*/