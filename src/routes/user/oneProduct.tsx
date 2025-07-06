import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { useUsers } from "../../hooks/useUsers";

import { UserDto } from "../../types/user.type"

const emptyUser: UserDto = {
  _id: "",
  email: "",
  address: "",
  firstname: "",
  lastname: ""
}


function UserPage() {

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserDto>(emptyUser);
  const { getOneUserById, deleteUser } = useUsers()

  useEffect(() => {
    getOneUserById(id!).then(data => {
      if (data) setUser(data)
    });
  }, [location])


  async function handleDelete() {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Voulez-vous vraiment supprimer cet utilisateur ?"))
      return;
    const result = await deleteUser(user._id!);
    
    if (result?.status !== 200) {
      alert("Erreur : échec à supprimer l'utilisateur");
      return;
    }
    alert(result?.data.message);
    navigate("/user");
  }

  if (!user) return <h2>Loading</h2>

  return (
    <aside className='py-6 px-20 border-l w-1/3'>
      <h3 className='font-bold text-xl'>{user.firstname} {user.lastname}</h3>
      <div className='py-6 mb-4 flex flex-col'>
        <table className="border-collapse text-left">
          <thead>
            <tr>
              <th className="border capitalize border-gray-500 p-3">Email</th>
              <th className="border capitalize border-gray-500 p-3">First name</th>
              <th className="border capitalize border-gray-500 p-3">Last name</th>
              <th className="border capitalize border-gray-500 p-3">Address</th>
              <th className="border border-gray-500 p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td className="border border-gray-500 p-3">{user.email}</td>
              <td className="border border-gray-500 p-3">{user.firstname}</td>
              <td className="border border-gray-500 p-3">{user.lastname}</td>
              <td className="border border-gray-500 p-3">{user.address}</td>
              <td className="border border-gray-500 p-3 hover:bg-teal-100">
                <Link to={`edit`}>Editer</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <Link
          className="p-3 mt-6 bg-teal-300 rounded-lg text-white text-center hover:bg-teal-400"
          to='/user'
        >
          Retour
        </Link>

        <button
          className="p-3 mt-8 bg-red-700 rounded-lg text-white hover:bg-red-800"
          onClick={handleDelete}
        >
          Supprimer
        </button>
      </div>

    </aside>
  )
}

export default UserPage