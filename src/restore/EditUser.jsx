import React, { useEffect } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import Loading from '../../../components/loading/Loading';
import LoadingMessage from '../../../components/loadingMessage/LoadingMessage';

const EditUser = ({ editUser, setEditUser, showEditSidebar, setShowEditSidebar, loading }) => {  
  
  const handleEditUpdate = (id, e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/users/${id}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUser)
    })
    .then(() => {
      setTimeout(() => {
        setShowEditSidebar(false);     
      }, 500);
    });
  }

  return (
    <Sidebar orientation={'sidebar-right'} active={showEditSidebar} stateActive={setShowEditSidebar}>
      {loading && <Loading />}
      {!editUser && !loading && ( <LoadingMessage massage={'Nema dostupnih korisnika! Proverite vasu bazu podataka.'}/> )}
      {editUser && ( 
        <>
          <form className='form'>
            <div className='form-group mb-8'>
              <h2 className='text-xl text-center text-gray-800'>{editUser?.first_name} {editUser?.last_name}</h2>
            </div>

            <div className='form-group grid-center mb-8'>
              <img className='form-avatar' src={editUser?.avatar.image_path} alt={editUser?.avatar.image_alt} />
            </div>

            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.first_name} required onChange={(event) => setEditUser({ ...editUser, first_name: event.target.value })} placeholder='First Name' />
            </div>
            
            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.last_name} required onChange={(event) => setEditUser({ ...editUser, last_name: event.target.value })} placeholder='Last Name' />
            </div>

            <div className='form-group mb-4'>
              <input className='form-input' type='email' defaultValue={editUser?.email} required onChange={(event) => setEditUser({ ...editUser, email: event.target.value })} placeholder='Email' />
            </div>

            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.number} required onChange={(event) => setEditUser({ ...editUser, number: event.target.value })} placeholder='Number' />
            </div> 

            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.street} required onChange={(event) => setEditUser({ ...editUser, street: event.target.value })} placeholder='Street' />
            </div>        

            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.city} required onChange={(event) => setEditUser({ ...editUser, city: event.target.value })} placeholder='City' />
            </div>

            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.ptt} required onChange={(event) => setEditUser({ ...editUser, ptt: event.target.value })} placeholder='PTT' />
            </div>  

            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.country} required onChange={(event) => setEditUser({ ...editUser, country: event.target.value })} placeholder='Country' />
            </div>                        

            <div className='form-group mb-4'>
              <input className='form-input' type='password' defaultValue={editUser?.password} onChange={(event) => setEditUser({ ...editUser, password: event.target.value })} placeholder='Password' autoComplete='on' />
            </div>

            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.role} required onChange={(event) => setEditUser({ ...editUser, role: event.target.value })} placeholder='Role' />
            </div>     

            <div className='form-group mb-4'>
              <input className='form-input' type='text' defaultValue={editUser?.tekuci_racun} required onChange={(event) => setEditUser({ ...editUser, tekuci_racun: event.target.value })} placeholder='Tekuci Racun' />
            </div>                  

            <div className='form-group grid grid-cols-2 gap-x-4'>
              <button type='button' className='btn btn-outline-primary' onClick={() => setShowEditSidebar(false)}>Cancel</button>
              <button type='submit' className='btn btn-primary' onClick={(event) => handleEditUpdate(editUser?.id, event)}>Edit User</button>
            </div>
          </form>     
        </>
      )} 
    </Sidebar>
  )
}

export default EditUser;