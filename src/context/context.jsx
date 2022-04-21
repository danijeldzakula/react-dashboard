import React, { createContext, useContext, useState, useEffect, useLayoutEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// user login
const user = {
  email: 'admin@admin.com',
  password: 'admin',
};

// create context 
const AuthContext = createContext(null);

// context provider
const AuthProvider = ({ children }) => {
  /* location and navigate */
  const location = useLocation();
  const navigate = useNavigate();
  /* authorization */
  const [ auth, setAuth ] = useState(true);
  /* search field */
  const [ searchBar, setSearchBar ] = useState('');
  /* sidebar add user */
  const [ showAddUser, setShowAddUser ] = useState(false);  
  /* sidebar edit user */
  const [ showEditSidebar, setShowEditSidebar ] = useState(false); 
  /* sidebar delete user */
  const [ showDeleteModal, setShowDeleteModal ] = useState(false);
  /* get user storage */
  let currentUser = JSON.parse(localStorage.getItem('user'));
  /* call authentification storage, and set auth state */
  useLayoutEffect(() => {
    currentUser ? setAuth(true) : setAuth(false);
  }, [ auth, currentUser, setAuth ]);

  /* logout */
  const logoutHandler = () => {
    setAuth(false);
    navigate('/');
    localStorage.removeItem('user');
  };

  /* login */
  const loginHandler = (event, form) => {
    event.preventDefault();
    if (form.email.trim() === user.email && form.password.trim() === user.password) {
      localStorage.setItem('user', JSON.stringify({ email: form.email, token: 'ovojetoken' }));
      setAuth(true);
      navigate('/users');
    } else {
      setAuth(false);   
      alert('Wrong password or username');
    }
  }

  /* search bar */
  const handleSearchBar = (event) => {
    let value = event.target.value.toLowerCase();
    setSearchBar(value);
  }  

  /* reset search bar on change location */
  useEffect(() => {
    setTimeout(() => {
      setSearchBar('');
    }, 100);
  }, [ location ]);

  /* escape event */
  const escapeSidebar = useCallback((event) => {
    if (event.key === "Escape") {
      setShowAddUser(false);
      setShowEditSidebar(false);
      setShowDeleteModal(false);
    }
  }, []);  

  /* trigger escape event */
  useEffect(() => {
    document.addEventListener("keydown", escapeSidebar, false);
    return () => {
      document.removeEventListener("keydown", escapeSidebar, false);
    };
  }, [ escapeSidebar ]);   
  


  /* edit user data */
  const [ userDataId, setUserDataId ] = useState(null);

  /* delete user data */
  const [ userDelete, setUserDelete ] = useState({});

  /* handle edit user */
  const handleEditUser = (data, id) => {
    setUserDataId(id);
    setShowEditSidebar(true);
  }

  /* handle delete user */
  const handleDeleteUser = (data) => {
    setUserDelete(data);
    setShowDeleteModal(true);
  }

  /* handle add user */
  const handleAddUser = () => {
    setShowAddUser(true);
  }

  /* context value */
  const contextValue = {
    auth,
    setAuth,
    currentUser,
    logoutHandler,
    loginHandler,

    searchBar,
    setSearchBar,
    handleSearchBar,

    showAddUser,
    setShowAddUser,
    handleAddUser,

    showEditSidebar,
    setShowEditSidebar,
    userDataId,
    setUserDataId,
    handleEditUser,
    
    userDelete,
    setUserDelete,
    handleDeleteUser,
    showDeleteModal,
    setShowDeleteModal,    
  }

  return (
    <AuthContext.Provider value={contextValue}>
      <div className="app">
        {children}
      </div>
    </AuthContext.Provider>
  );
};

// call custom hook
const useGlobalHook = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useGlobalHook };




// https://dev.to/mychal/protected-routes-with-react-function-components-dh

/* freeze scroll */
// const freeze = (element) => {
//   let element = document.documentElement;
//   let elementPosition = element.style.position;
//   let scrollPosition = element.scrollTop;

//   if (!elementPosition) {
//     element.style.position = 'fixed';
//     element.style.width = '100%';
//     element.style.height = '100%';
//     element.style.top = '-' + scrollPosition + 'px';
//     element.style.overflowY = 'scroll';   
//   }
// }

/* unfreeze scroll */
// const unfreeze = (element) => {  
//   let element = document.documentElement;
//   let elementPosition = element.style.position;
//   if (elementPosition === 'fixed') {
//     element.style.position = 'static';
//     element.scrollTop = -parseInt(element.style.top);
//     element.style.position = '';
//     element.style.top = '';
//     element.style.width = '';
//     element.style.height = '';
//     element.style.overflowY = '';
//   }
// }