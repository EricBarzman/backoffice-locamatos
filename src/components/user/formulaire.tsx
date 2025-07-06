import { UserSentDto } from "../../types/user.type";

function Formulaire({
  user,
  handleSubmit,
  setItem
}: {
  user: UserSentDto,
  handleSubmit: (e: any) => Promise<void>,
  setItem: (e: any) => void,
}) {

  return (

    <form className="flex flex-col" onSubmit={handleSubmit}>

      <div className="p-2">
        <label className="mb-2 text-sm font-bold">Email</label>
        <input
          className="w-full border-2 p-2 border-gray-200"
          name="email"
          type="email"
          value={user.email}
          placeholder="Email..."
          onChange={(e) => setItem({ ...user, [e.currentTarget.name]: e.target.value })}
        />
      </div>

      <div className="p-2">
        <label className="mb-2 text-sm font-bold">First name</label>
        <input
          className="w-full border-2 p-2 border-gray-200"
          name="firstname"
          type="text"
          value={user.firstname}
          placeholder="First name..."
          onChange={(e) => setItem({ ...user, [e.currentTarget.name]: e.target.value })}
        />
      </div>

      <div className="p-2">
        <label className="mb-2 text-sm font-bold">Last name</label>
        <input
          className="w-full border-2 p-2 border-gray-200"
          name="lastname"
          type="text"
          value={user.lastname}
          placeholder="Last name..."
          onChange={(e) => setItem({ ...user, [e.currentTarget.name]: e.target.value })}
        />
      </div>

      <div className="p-2">
        <label className="mb-2 text-sm font-bold">Address</label>
        <input
          className="w-full border-2 p-2 border-gray-200"
          name="address"
          type="text"
          value={user.address}
          placeholder="Address..."
          onChange={(e) => setItem({ ...user, [e.currentTarget.name]: e.target.value })}
        />
      </div>

      <div className="p-2">
        <label className="mb-2 text-sm font-bold">Password</label>
        <input
          className="w-full border-2 p-2 border-gray-200"
          name="password"
          type="password"
          value={user.password}
          placeholder="Password..."
          onChange={(e) => setItem({ ...user, [e.currentTarget.name]: e.target.value })}
        />
      </div>
      
      <button className="cursor-pointer mt-6 rounded-lg p-2 bg-teal-400" type="submit">
        OK
      </button>

    </form>
  )
}

export default Formulaire