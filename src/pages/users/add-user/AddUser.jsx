import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useGlobalHook } from '../../../context/context';

const AddUser = () => {
  const { showAddUser, setShowAddUser } = useGlobalHook();
  const navigate = useNavigate();
  const [ formValues, setFormValues ] = useState({
    avatar: {
      image_path: "./images/profile/profile-guy-three.png",
      image_alt: "Profile image of Nicholas Pountney"
    },    
    first_name: '',
    last_name: '',
    email: '',
    number: '',
    street: '',
    city: '',
    ptt: '',
    role: '',
    country: '',
    password: '',
    status: '',
    tekuci_racun: '',
  });

  /* form submit */
  const handleSubmit = (data) => {
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(() => {
      setTimeout(() => {
        navigate('/users');
      }, 500);
    });
  }

  /* form on button click submit */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formValues);
  }

  /* get users data */ 
  const changeAddUser = (field) => (value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  return (
    <Sidebar orientation={'sidebar-right'} active={showAddUser} stateActive={setShowAddUser}>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.first_name} onChange={(event) => changeAddUser("first_name")(event.target.value)} placeholder='First Name' />
        </div>

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.last_name} onChange={(event) => changeAddUser("last_name")(event.target.value)} placeholder='Last Name' />
        </div>  

        <div className='form-group mb-4'>
          <input className='form-input' type='email' required aria-autocomplete='off' value={formValues.email} onChange={(event) => changeAddUser("email")(event.target.value)} placeholder='Email' />
        </div>      

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.number} onChange={(event) => changeAddUser("number")(event.target.value)} placeholder='Number' />
        </div>  

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.street} onChange={(event) => changeAddUser("street")(event.target.value)} placeholder='Street' />
        </div>                                 

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.city} onChange={(event) => changeAddUser("city")(event.target.value)} placeholder='City' />
        </div>     

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.ptt} onChange={(event) => changeAddUser("ptt")(event.target.value)} placeholder='PTT' />
        </div>             

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.role} onChange={(event) => changeAddUser("role")(event.target.value)} placeholder='Role' />
        </div> 

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.country} onChange={(event) => changeAddUser("country")(event.target.value)} placeholder='Country' />
        </div>    

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required aria-autocomplete='off' value={formValues.password} onChange={(event) => changeAddUser("password")(event.target.value)} placeholder='Password' />
        </div>                 

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.status} onChange={(event) => changeAddUser("status")(event.target.value)} placeholder='Status' />
        </div>     

        <div className='form-group mb-4'>
          <input className='form-input' type='text' required value={formValues.tekuci_racun} onChange={(event) => changeAddUser("tekuci_racun")(event.target.value)} placeholder='Tekuci Racun' />
        </div>     


                   

        <div className='form-group grid grid-cols-2 gap-x-4'>
          <button type='button' className='btn btn-outline-primary' onClick={() => setShowAddUser(false)}>Cancel</button>
          <button type='submit' className='btn btn-primary' onClick={(e) => handleFormSubmit(e)}>Add User</button>
        </div>        
      </form>
    </Sidebar>
  )
}

export default AddUser;