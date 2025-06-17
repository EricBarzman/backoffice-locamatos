import { Link } from "react-router-dom"
import { CategoriesDto } from "../../types/categories.type"

function TableMany({ categories }: { categories: CategoriesDto[] }) {
  // let keys = Object.keys(categories[0]);

  return (
    <div className='py-6'>
      <table className="border-collapse text-left">
        <thead>
          <tr>
            <th className="border border-gray-500 p-3">Index</th>
            {/* {keys.map(key => <th key={key} className="border capitalize border-gray-500 p-3">{key}</th>)} */}
            <th className="border capitalize border-gray-500 p-3">Nom</th>
            <th className="border capitalize border-gray-500 p-3">Slug</th>
            <th className="border border-gray-500 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={cat._id}>
              <td className="border border-gray-500 p-3">{index + 1}</td>
              <td className="border border-gray-500 p-3">{cat.nom}</td>
              <td className="border border-gray-500 p-3">{cat.slug}</td>
              {/* {keys.map((key, idx) => (
                  <td key={idx} className="border border-gray-500 p-3">{Object.values(cat)[idx]}</td>
                ))} */}
              <td className="border border-gray-500 p-3">
                <Link to={'/category/' + cat._id}>See</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMany