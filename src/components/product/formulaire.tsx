import { useEffect, useState } from "react";

import { useCategories } from "../../hooks/useCategories";
import { useSubCategories } from "../../hooks/useSubCategories";

import { CategoriesDto, SubCategoriesDto } from "../../types/categories.type";
import { ProductDto } from "../../types/product.type";

function Formulaire({
  product,
  handleSubmit,
  setItem
}: {
  product: ProductDto,
  handleSubmit: (e: any) => Promise<void>,
  setItem: (e: any) => void,
}) {

  const [categories, setCategories] = useState<CategoriesDto[]>([])
  const [subcategories, setSubCategories] = useState<SubCategoriesDto[]>([])

  const { getAllCategories } = useCategories()
  const { getAllSubCategories } = useSubCategories()

  useEffect(() => {
    getAllCategories().then(data => setCategories(data!));
    getAllSubCategories().then(data => setSubCategories(data!))
  }, [])

  return (

    <form className="flex flex-col" onSubmit={handleSubmit}>

      <div className="p-2">
        <label className="mb-2 text-sm font-bold">Nom</label>
        <input
          className="w-full border-2 p-2 border-gray-200"
          name="nom"
          type="text"
          value={product.nom}
          placeholder="Nom produit..."
          onChange={(e) => setItem({ ...product, nom: e.target.value })}
        />
      </div>

      <div className="p-2">
        <label className="mb-2 text-sm font-bold">Description</label>
        <textarea
          className="w-full border-2 p-2 border-gray-200"
          name="nom"
          value={product.description}
          placeholder="Description..."
          onChange={(e) => setItem({ ...product, description: e.target.value })}
        />
      </div>


      <div className="p-2">
        <label className="mb-2 text-sm font-bold"></label>
        <input
          className="w-full border-2 p-2 border-gray-200"
          name="price"
          type="number"
          value={product.price}
          onChange={(e) => setItem({ ...product, price: parseInt(e.target.value) })}
        />
      </div>


      <div className="p-2 flex flex-col mb-2">
        <label className="mb-2 text-sm font-bold">Catégorie</label>
        <select
          className="p-2 rounded-md"
          name='category'
          value={product.categoryId}
          onChange={(e) => setItem({ ...product, categoryId: e.target.value })}
        >
          <option value="">-- Choisir --</option>
          {categories.map(cat =>
            <option key={cat.nom} value={cat._id}>{cat.nom}</option>
          )}
        </select>
      </div>

      <div className="p-2 flex flex-col mb-2">
        <label className="mb-2 text-sm font-bold">Sous-catégorie</label>
        <select
          className="p-2 rounded-md"
          name='subcategory'
          value={product.subcategoryId}
          onChange={(e) => setItem({ ...product, subcategoryId: e.target.value })}
        >
          <option value="">-- Choisir --</option>
          {subcategories.map(cat =>
            <option key={cat.nom} value={cat._id}>{cat.nom}</option>
          )}
        </select>
      </div>

      <button className="cursor-pointer mt-6 rounded-lg p-2 bg-teal-400" type="submit">
        OK
      </button>

    </form>
  )
}

export default Formulaire