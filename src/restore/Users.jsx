import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersTable from './table-users/UsersTable';
import EditUser from './edit-user/EditUser';
import DeleteUser from './delete-user/DeleteUser';
import AddUser from './add-user/AddUser';
import { useGlobalHook } from '../../context/context';

const Users = () => {
  /* navigate */
  const navigate = useNavigate();
  /* context */
  const { 
    searchBar, 
    isActive, 
    setIsActive,
    showEditSidebar, 
    setShowEditSidebar, 
    showDeleteModal, 
    setShowDeleteModal,
  } = useGlobalHook();
  /* loading */
  const [ loading, setLoading ] = useState(true);
  /* users */
  const [ users, setUsers ] = useState(null);
  
  /* edit user */
  const [ editUser, setEditUser ] = useState(null);
  /* delete user */
  const [ deleteUser, setDeleteUser ] = useState(null);

  /* edit user */
  const handleEditUser = (id) => {
    fetch(`http://localhost:8000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setShowEditSidebar(true);
        setEditUser(data);
      });    
  }

  /* view user */
  const handleViewUser = (id) => {
    navigate(`/user/${id}`);
  }  

  /* delete user */
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:8000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDeleteUser(data);
        setShowDeleteModal(true);
        setLoading(false);
      });     
  }

  /* get users data */ 
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/users')
        .then((res) => {
          if (!res.ok) {
            setLoading(false);
            throw Error('Users not loading!');
          }
          return res.json();
        })
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('Error message: ', err);
          setLoading(false);
        });
    }, 500);
  }, [ ]);

  /* filtered users */
  let filteredUsers = users?.filter((user) => {
    const { first_name, last_name } = user;
    return first_name.toLowerCase().includes(searchBar) || last_name.toLowerCase().includes(searchBar);
  });

  return (
    <>
      <UsersTable users={filteredUsers} handleDeleteUser={handleDeleteUser} handleEditUser={handleEditUser} handleViewUser={handleViewUser} loading={loading} />
      <DeleteUser deleteUser={deleteUser} setDeleteUser={setDeleteUser} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />
      <EditUser editUser={editUser} setEditUser={setEditUser} showEditSidebar={showEditSidebar} setShowEditSidebar={setShowEditSidebar} loading={loading} />
      <AddUser active={isActive} stateActive={setIsActive} />
    </>
  )
}

export default Users;









//console.log(window.location.pathname.replace(/^\/|\/$/g, ""))
