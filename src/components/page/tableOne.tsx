import { Link } from "react-router-dom"
import { CategoriesDto } from "../../types/categories.type"

function TableOne({ category }: { category: CategoriesDto }) {

  const keys = Object.keys(category);

  return (
    <aside className='py-6 px-20 border-l w-1/3'>
      <h3 className='font-bold text-xl'>{category.nom}</h3>
      <div className='py-6 mb-4'>
        <table className="border-collapse text-left">
          <thead>
            <tr>
              {keys.map(key => <th key={key} className="border capitalize border-gray-500 p-3">{key}</th>)}
              <th className="border border-gray-500 p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              {keys.map((key, idx) => (
                <td key={key} className="border border-gray-500 p-3">{Object.values(category)[idx]}</td>
              ))}
              <td className="border border-gray-500 p-3 hover:bg-teal-100">
                <Link to={`edit`}>Editer</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link className="p-3 bg-teal-300 rounded-lg hover:bg-teal-400" to="/category">
        Retour
      </Link>
    </aside>
  )
}

export default TableOne