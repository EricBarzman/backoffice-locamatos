import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { useProducts } from "../../hooks/useProducts";

import { ProductDto } from "../../types/product.type"

const emptyProduct: ProductDto = {
  _id: "",
  nom: "",
  category: {
    _id: "",
    nom: "",
    slug: ""
  },
  subcategory: {
    _id: "",
    nom: "",
    slug: "",
    category: {
      _id: "",
      nom: "",
      slug: ""
    }
  },
  imageUrls: [],
  description: "",
  price: 0,
  categoryId: "",
  subcategoryId: ""
}


function ProductPage() {

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDto>(emptyProduct);
  const { getOneProductById, deleteProduct } = useProducts()

  useEffect(() => {
    getOneProductById(id!).then(data => {
      if (data) setProduct(data)
    });
  }, [location])


  async function handleDelete() {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Voulez-vous vraiment supprimer ce produit ?")) return;
    await deleteProduct(product._id!);
    navigate("/product");
  }

  if (!product) return <h2>Loading</h2>

  return (
    <aside className='py-6 px-20 border-l w-1/3'>
      <h3 className='font-bold text-xl'>{product.nom}</h3>
      <div className='py-6 mb-4 flex flex-col'>
        <table className="border-collapse text-left">
          <thead>
            <tr>
              <th className="border capitalize border-gray-500 p-3">Nom</th>
              <th className="border capitalize border-gray-500 p-3">Prix</th>
              <th className="border capitalize border-gray-500 p-3">Description</th>
              <th className="border capitalize border-gray-500 p-3">ImageUrls</th>
              <th className="border capitalize border-gray-500 p-3">Category</th>
              <th className="border capitalize border-gray-500 p-3">Subcategory</th>
              <th className="border border-gray-500 p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td className="border border-gray-500 p-3">{product.nom}</td>
              <td className="border border-gray-500 p-3">{product.price} € / j</td>
              <td className="border border-gray-500 p-3">{product.description}</td>
              <td className="border border-gray-500 p-3">{product.imageUrls.map(url => url)}</td>
              <td className="border border-gray-500 p-3">{product.category.nom}</td>
              <td className="border border-gray-500 p-3">{product.subcategory.nom}</td>
              <td className="border border-gray-500 p-3 hover:bg-teal-100">
                <Link to={`edit`}>Editer</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <Link
          className="p-3 mt-6 bg-teal-300 rounded-lg text-white text-center hover:bg-teal-400"
          to='/product'
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

export default ProductPage