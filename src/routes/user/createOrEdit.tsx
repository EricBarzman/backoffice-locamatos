import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { UserSentDto } from '../../types/user.type';

import Formulaire from '../../components/user/formulaire';
import { useUsers } from '../../hooks/useUsers';
import AbandonBtn from '../../components/abandonBtn/abandonBtn';


const emptyUser: UserSentDto = {
  email: '',
  address: '',
  firstname: '',
  lastname: '',
  password: ''
}

function UserCreateOrEdit() {

  const navigate = useNavigate();
  const { getOneUserById, addUser, editUser } = useUsers();

  let { id } = useParams();

  const [user, setUser] = useState<UserSentDto>(emptyUser);

  useEffect(() => {
    if (id) getOneUserById(id).then(data => {
      if (data)
        setUser({ ...data, password: ""})
    })
  }, [])


  async function handleSubmit(e: any) {
    e.preventDefault();

    if (user.email === "") {
      alert("Vous devez donner un email");
      return;
    }

    if (user.password === "") {
      alert("Vous devez donner un mot de passe");
      return;
    }

    if (user.password.length < 6) {
      alert("Le mot de passe doit faire au moins 6 caractères");
      return;
    }

    try {
      if (id)
        await editUser(id, user);
      
      if (!id) {
        const result = await addUser(user);   
        if (result)
          id = result._id
      }
      // navigate(`/user/${id}`);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <aside className='border-l w-2/3 border-gray-200 py-6 px-20'>
      <div className="w-full p-4 flex flex-col">
        <h3 className='font-bold text-xl mb-6'>{user.firstname} {user.lastname}</h3>

        <Formulaire user={user} handleSubmit={handleSubmit} setItem={setUser} />

        {id && <AbandonBtn label="Abandon" path={`/user/${id}`} />}

        {!id && <AbandonBtn label="Abandon" path={`/user`} />}
      </div>

    </aside>
  )
}

export default UserCreateOrEdit