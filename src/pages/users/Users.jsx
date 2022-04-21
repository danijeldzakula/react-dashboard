import React, { useState, useEffect } from 'react';
import UsersTable from './table-users/UsersTable';
import EditUser from './edit-user/EditUser';
import DeleteUser from './delete-user/DeleteUser';
import AddUser from './add-user/AddUser';
import { useGlobalHook } from '../../context/context';

const Users = () => {
  /* loading */
  const [ loading, setLoading ] = useState(true);  
  /* context */
  const { searchBar } = useGlobalHook();
  /* users */
  const [ users, setUsers ] = useState();

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
      <UsersTable users={filteredUsers} loading={loading} />
      <DeleteUser />
      <EditUser />
      <AddUser />
    </>
  )
}

export default Users;









//console.log(window.location.pathname.replace(/^\/|\/$/g, ""))
