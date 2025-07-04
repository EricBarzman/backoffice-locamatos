import { Link } from "react-router-dom"
import { SubCategoriesDto } from "../../types/categories.type"

function TableMany({ subcategories }: { subcategories: SubCategoriesDto[] }) {

  return (
    <div className='py-6'>
      <table className="border-collapse text-left">
        <thead>
          <tr>
            <th className="border border-gray-500 p-3">Index</th>
            <th className="border capitalize border-gray-500 p-3">Nom</th>
            <th className="border capitalize border-gray-500 p-3">Slug</th>
            <th className="border border-gray-500 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((cat, index) => (
            <tr key={cat._id}>
              <td className="border border-gray-500 p-3">{index + 1}</td>
              <td className="border border-gray-500 p-3">{cat.nom}</td>
              <td className="border border-gray-500 p-3">{cat.slug}</td>
              <td className="border border-gray-500 p-3">
                <Link to={'/subcategory/' + cat._id}>See</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMany