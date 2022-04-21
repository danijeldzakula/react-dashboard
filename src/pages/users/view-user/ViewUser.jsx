import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../components/loading/Loading';
import LoadingMessage from '../../../components/loadingMessage/LoadingMessage';
import Section from '../../../components/section/Section';

const ViewUser = () => {
  const { id } = useParams();
  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/users/${id}`)
        .then((res) => {
          if (!res.ok) {
            setLoading(false);
            throw Error('User not loading!');
          }
          return res.json();
        })
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('Error message: ', err);
          setLoading(false);
          navigate('/users', { replace: true });
        });
    }, 500);
  }, [ ]);

  return (
    <Section superClass={'section-user'}>
      {loading && <Loading />}
      {!user && !loading && ( <LoadingMessage massage={'Korisnik nije dostupan ili postoje problemi sa bazom podataka.'}/> )}
      <h2>Ime i Prezime: {user?.first_name} {user?.last_name}</h2>
      <button type='button' onClick={() => navigate(-1)}>Back</button>
    </Section>
  )
}

export default ViewUser;














// if (loading) {
//   return <Loading />
// }

// if (!user && !loading) {
//   return <LoadingMessage massage={'Korisnik nije dostupan ili postoje problemi sa bazom podataka.'}/>
// }

/*
  const isEmptyObject = async (obj) => Object?.keys(obj).length === 0;
  let emptyObject = isEmptyObject(user);
*/