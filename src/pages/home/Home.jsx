import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalHook, AuthContext } from '../../context/context';

const Home = () => {
  const { logoutHandler } = useGlobalHook(AuthContext);

  return (
    <section className='section section-home bg-section' style={{ backgroundImage: `url(../images/background-image.jpg)`}}>
      <div className='center-box'>
        <h1>Home</h1>
        <Link to={'/login'}>Login</Link>
        <button type='button' onClick={() => logoutHandler()}>Logout</button>
      </div>
    </section>
  )
}

export default Home;