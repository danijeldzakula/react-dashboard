import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal/Modal';
import { useGlobalHook } from '../../../context/context';

const DeleteUser = () => {
  const navigate = useNavigate();
  const { userDelete, showDeleteModal, setShowDeleteModal } = useGlobalHook();

  /* delete user with user id */
  const handleDeleteUser = (id, e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/users/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTimeout(() => {
        navigate('/users');
        setShowDeleteModal(false);
      }, 500);
    });
  }

  return (    
    <Modal active={showDeleteModal} setActive={setShowDeleteModal}>
      {userDelete && (
        <>
          <h2 className='mb-8 mt-4 text-center text-2xl'>{userDelete?.first_name} {userDelete?.last_name}</h2>
          <div className='grid grid-cols-2 gap-x-4'>
            <button type='button' className='btn btn-outline-primary' onClick={() => setShowDeleteModal(false)}>Cancel</button>
            <button type='submit' className='btn btn-primary' onClick={(event) => handleDeleteUser(userDelete?.id, event)}>Delete User</button>        
          </div>
        </>
      )}
    </Modal>
  )
}

export default DeleteUser;