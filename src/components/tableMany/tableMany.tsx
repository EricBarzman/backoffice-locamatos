import { Link } from "react-router-dom"

function TableMany({ type, types }: { type: string, types: any[] }) {

  let keys = Object.keys(types[0]);

  return (
    <div className='py-6'>
      <table className="border-collapse text-left">
        <thead>
          <tr>
            <th className="border border-gray-500 p-3">Index</th>
            {keys.map(key => <th key={key} className="border capitalize border-gray-500 p-3">{key}</th>)}
            <th className="border border-gray-500 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {types.map((t, index) => (
            <tr key={t._id}>
              <td className="border border-gray-500 p-3">{index + 1}</td>
              {keys.map((key, idx) => (
                <td key={idx} className="border border-gray-500 p-3">{`${Object.values(t)[idx]}`}</td>
              ))}
              <td className="border border-gray-500 p-3">
                <Link to={`/${type}/` + t._id}>Voir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMany