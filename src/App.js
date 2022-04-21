import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from './context/context';
import Routes from './routes/Router';

const App = () => {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [ pathname ]);

  useEffect(() => {
    if (window.history.action === 'POP') {
      window.addEventListener('unload', (e) => {
        return window.scrollTo(0, 0);
      });
    }
  
    if (window.history.scrollRestoration) {
      if (window.history.scrollRestoration === 'auto') {
        window.history.scrollRestoration = 'manual';
      }
      window.addEventListener('unload', () => {
        return window.scrollTo(0, 0);
      });
    }
    return () => {};
  }, []);  

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;