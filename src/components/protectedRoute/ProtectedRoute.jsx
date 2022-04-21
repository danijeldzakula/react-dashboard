import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Home from '../../pages/home/Home';
import { useGlobalHook, AuthContext } from '../../context/context';

const ProtectedRoute = () => {
  const { auth, currentUser } = useGlobalHook(AuthContext);

  if (!auth) {
    return <Home render={() => <Navigate to={'/'} /> } />
  }

  return currentUser && auth ? <Outlet /> : <Navigate to={'/'} />
}

export default ProtectedRoute;