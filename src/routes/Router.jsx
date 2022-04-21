import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProtectedRoute from '../components/protectedRoute/ProtectedRoute';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Forgot from '../pages/forgot/Forgot';
import Users from '../pages/users/Users';
import ViewUser from '../pages/users/view-user/ViewUser';
import Developers from '../pages/developers/Developers';
import Clients from '../pages/clients/Clients';
import Profile from '../pages/profile/Profile';
import Error from '../pages/error/Error';
import SidebarNav from '../components/sidebarNav/SidebarNav'; 
import { useGlobalHook, AuthContext } from '../context/context';

const Router = () => {
  const { auth } = useGlobalHook(AuthContext);
  const location = useLocation();

  useLayoutEffect(() => {
    return () => {};
  }, [ location ]);  

  return (
    <main className={`main ${!auth ? '' : 'main-layout'}`}>
      {auth && <SidebarNav />}
      <Routes>
          {/* public routes */}
          <Route index path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/forgot' element={ <Forgot /> } />

          {/* protected routes */}
          <Route element={ <ProtectedRoute /> }>
            <Route index path='/users' element={ <Users render={() => <Navigate to='/users' /> }/> } />
            <Route path='/user/:id' element={ <ViewUser /> } />
            <Route path='/developers' element={ <Developers /> } />
            <Route path='/clients' element={ <Clients /> } />
            <Route path='/profile' element={ <Profile /> } />
          </Route>

          {/* catch all */}
          <Route path={'*'} element={ <Error /> } />
      </Routes>
    </main>
  )
}

export default Router