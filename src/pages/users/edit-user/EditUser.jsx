import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useGlobalHook } from '../../../context/context';

const EditUser = () => {  
  const { userDataId, setUserDataId, showEditSidebar, setShowEditSidebar } = useGlobalHook();
  const [ userData, setUserData ] = useState({
    avatar: {
      image_alt: '',
      image_path: '',
    },
    first_name: '',
    last_name: '',
    email: '',
    number: '',
    street: '',
    city: '',
    ptt: '',
    status: '',
    country: '',
    password: '',
    role: '',
    tekuci_racun: '',
  });

  /* form submit */
  const handleSubmit = ({ id }) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    .then(() => {
      setTimeout(() => {
        setShowEditSidebar(false);     
      }, 500);
    });
  }  

  /* form on button click submit */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(userData);
  }  

  /* get all value from onchange */
  const changeEditUser = (field) => (value) => {
    setUserData({ ...userData, [field]: value });
  };    

  /* get users data */ 
  useEffect(() => {
    if (!userDataId) {
      return;
    }

    fetch(`http://localhost:8000/users/${userDataId}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Users not loading!');
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log('Error message: ', err);
      });

      setUserDataId(null);
  }, [ userDataId, showEditSidebar, setUserDataId ]);

  return (
    <Sidebar orientation={'sidebar-right'} active={showEditSidebar} stateActive={setShowEditSidebar}>
      {userData && (    
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group mb-8'>
            <h2 className='text-xl text-center text-gray-800'>{userData?.first_name} {userData?.last_name}</h2>
          </div>

          <div className='form-group grid-center mb-8'>
            <img className='form-avatar' src={userData?.avatar.image_path} alt={userData?.avatar.image_alt} />
          </div>

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.first_name} required onChange={(event) => changeEditUser("first_name")(event.target.value)} placeholder='First Name' />
          </div>
          
          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.last_name} required onChange={(event) => changeEditUser("last_name")(event.target.value)} placeholder='Last Name' />
          </div>

          <div className='form-group mb-4'>
            <input className='form-input' type='email' value={userData?.email} required onChange={(event) => changeEditUser("email")(event.target.value)} placeholder='Email' />
          </div>

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.number} required onChange={(event) => changeEditUser("number")(event.target.value)} placeholder='Number' />
          </div> 

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.street} required onChange={(event) => changeEditUser("street")(event.target.value)} placeholder='Street' />
          </div>        

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.city} required onChange={(event) => changeEditUser("city")(event.target.value)} placeholder='City' />
          </div>

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.ptt} required onChange={(event) => changeEditUser("ptt")(event.target.value)} placeholder='PTT' />
          </div>  

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.status} required onChange={(event) => changeEditUser("status")(event.target.value)} placeholder='Status' />
          </div>            

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.country} required onChange={(event) => changeEditUser("country")(event.target.value)} placeholder='Country' />
          </div>                        

          <div className='form-group mb-4'>
            <input className='form-input' type='password' value={userData?.password} onChange={(event) => changeEditUser("password")(event.target.value)} placeholder='Password' autoComplete='off' />
          </div>

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.role} required onChange={(event) => changeEditUser("role")(event.target.value)} placeholder='Role' />
          </div>     

          <div className='form-group mb-4'>
            <input className='form-input' type='text' value={userData?.tekuci_racun} required onChange={(event) => changeEditUser("tekuci_racun")(event.target.value)} placeholder='Tekuci Racun' />
          </div>

          <div className='form-group grid grid-cols-2 gap-x-4'>
            <button type='button' className='btn btn-outline-primary' onClick={() => setShowEditSidebar(false)}>Cancel</button>
            <button type='submit' className='btn btn-primary' onClick={(event) => handleFormSubmit(event)}>Edit User</button>
          </div>
        </form>
      )}
    </Sidebar>
  )
}

export default EditUser;