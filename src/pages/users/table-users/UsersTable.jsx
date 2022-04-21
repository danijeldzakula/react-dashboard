import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/loading/Loading';
import LoadingMessage from '../../../components/loadingMessage/LoadingMessage';
import Section from '../../../components/section/Section';
import SearchBar from '../../../components/searchBar/SearchBar';
import { useGlobalHook } from '../../../context/context';

const UsersTable = ({ users, loading }) => {
  /* context */
  const { handleEditUser, handleAddUser, handleDeleteUser } = useGlobalHook();
  const navigate = useNavigate();

  return (
    <Section superClass={'section-users'}>
      {loading && <Loading />}
      {!users && !loading && ( <LoadingMessage massage={'Nema dostupnih korisnika! Proverite vasu bazu podataka.'}/> )}
      {users && ( 
        <>
          <header className='table-header color'>
            <SearchBar placeholder={'Search User...'}/>
            <button className='btn btn-primary' type='button' onClick={() => handleAddUser()}>Add User</button>
          </header>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Role</th>
                <th>Status</th>
                <th>Email</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody className="tbody users-table-body">
              {users?.map((user) => {
                const { id, avatar, city, email, first_name, last_name, role, status } = user;
                return (
                  <tr key={id}>
                    <td>
                      <img className="avatar" alt={avatar.image_alt} src={avatar.image_path} />
                    </td>
                    <td data-label="First Name">{first_name}</td>
                    <td data-label="Last Name">{last_name}</td>
                    <td data-label="City">{city}</td>
                    <td data-label="Role">{role}</td>
                    <td data-label="Status">{status}</td>
                    <td data-label="Email">
                      <a href={`mailto:${email}`} className="link link-primary">{email}</a>
                    </td>
                    <td data-label="Options">
                      <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => handleEditUser(user, user.id)} type='button' className="btn edit-user p-0 w-8 h-8">
                          <span className='grid-center w-full h-full icon icon-edit'>E</span>
                        </button>
                        <button onClick={() => navigate(`/user/${id}`)} type='button' className="btn view-user p-0 w-8 h-8">
                          <span className='grid-center w-full h-full icon icon-view'>V</span>
                        </button>
                        <button onClick={(e) => handleDeleteUser(user)} type='button' className="btn delete-user p-0 w-8 h-8">
                          <span className='grid-center w-full h-full icon icon-delete'>D</span>
                        </button>
                      </div>                                                
                    </td> 
                  </tr>  
                )
              })}                                                                                                                        
            </tbody>
          </table>
        </>
      )}
    </Section>
  )
}

export default UsersTable;