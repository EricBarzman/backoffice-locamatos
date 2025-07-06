import { Link } from "react-router-dom"
import { UserDto } from "../../types/user.type"

function TableMany({ users }: { users: UserDto[] }) {

  return (
    <div className='py-6'>
      <table className="border-collapse text-left">
        <thead>
          <tr>
            <th className="border border-gray-500 p-3">Index</th>
            <th className="border capitalize border-gray-500 p-3">Email</th>
            <th className="border border-gray-500 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="border border-gray-500 p-3">{index + 1}</td>
              <td className="border border-gray-500 p-3">{user.email}</td>
              <td className="border border-gray-500 p-3">
                <Link to={'/user/' + user._id}>See</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMany