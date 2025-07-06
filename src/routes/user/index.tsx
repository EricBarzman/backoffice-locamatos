import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useUsers } from '../../hooks/useUsers'
import { UserDto } from '../../types/user.type'

import TableMany from '../../components/user/tableMany'


function UsersList() {

  const { getAllUsers } = useUsers();
  const [users, setUsers] = useState<UserDto[]>([]);
  const location = useLocation();

  useEffect(() => {
    getAllUsers().then(data => setUsers(data!));
  }, [location])

  return (
    <main className='py-6 px-20 w-2/5'>
      <h3 className='font-bold text-xl mb-6'>Catégories</h3>
      <Link
        className='bg-amber-500 text-white hover:bg-amber-600 rounded-lg block w-1/3 text-center p-2'
        to="/user/add"
      >
        Créer
      </Link>
      <TableMany users={users} />
    </main>
  )
}

export default UsersList