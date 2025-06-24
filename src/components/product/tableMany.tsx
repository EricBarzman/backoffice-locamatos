import { Link } from "react-router-dom"
import { ProductDto } from "../../types/product.type"

function TableMany({ products }: { products: ProductDto[] }) {
  
  return (
    <div className='py-6'>
      <table className="border-collapse text-left">
        <thead>
          <tr>
            <th className="border border-gray-500 p-3">Index</th>
            <th className="border capitalize border-gray-500 p-3">Nom</th>
            <th className="border capitalize border-gray-500 p-3">Description</th>
            <th className="border border-gray-500 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, index) => (
            <tr key={prod.nom}>
              <td className="border border-gray-500 p-3">{index + 1}</td>
              <td className="border border-gray-500 p-3">{prod.nom}</td>
              <td className="border border-gray-500 p-3">{prod.description}</td>
              <td className="hover:bg-gray-400 border border-gray-500 p-3">
                <Link to={'/product/' + prod._id}>Voir</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMany