import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSubCategories } from "../../hooks/useSubCategories";
import { CategoriesDto, SubCategoriesDto } from "../../types/categories.type"
import { useCategories } from "../../hooks/useCategories";


const emptySubcat: SubCategoriesDto = {
  _id: "",
  nom: "",
  slug: "",
  category: {
    _id: "",
    nom: "",
    slug: ""
  }
}

function Formulaire({ id }: { id: undefined | string }) {

  const navigate = useNavigate();
  const { editSubCategory, getOneSubCategoryById, addSubCategory } = useSubCategories();
  const { getAllCategories } = useCategories();

  const [subcategory, setSubCategory] = useState<SubCategoriesDto>(emptySubcat);
  const [categories, setCategories] = useState<CategoriesDto[]>([]);

  useEffect(() => {
    if (id) getOneSubCategoryById(id).then(cat => setSubCategory(cat!));
    getAllCategories().then(data => {
      if (data) setCategories(data);
    })
  }, [])

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (subcategory.nom === "") {
      alert("Veuillez remplir un nom");
      return;
    }

    if (subcategory.category._id === '') {
      alert("Veuillez choisir une catégorie");
      return;
    }

    try {
      if (id) {
        await editSubCategory(id, subcategory);
        navigate(`/subcategory/${id}`);
      }
      if (!id) {
        await addSubCategory(subcategory);
        navigate(`/subcategory`);
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h3 className='font-bold text-xl mb-10'>{subcategory.nom}</h3>
      <form className="p-4 flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSubCategory({ ...subcategory, nom: e.target.value })}
          className="border-2 p-2 border-gray-200"
          value={subcategory.nom}
          placeholder="Nom..."
        />

        <div className="p-2 flex flex-col mb-2">
          <label className="mb-2 text-sm font-bold">Catégorie</label>
          <select
            className="p-2 rounded-md"
            name='category'
            value={subcategory.category._id}
            onChange={(e) => setSubCategory({
              ...subcategory,
              category: {
                ...subcategory.category,
                _id: e.target.value
              }
            })}
          >
            <option value="">-- Choisir --</option>
            {categories.map(cat =>
              <option key={cat.nom} value={cat._id}>{cat.nom}</option>
            )}
          </select>
        </div>

        <button className="cursor-pointer mt-6 rounded-lg p-2 bg-teal-400" type="submit">
          OK
        </button>

        {id && <Link
          className="p-2 mt-6 text-center bg-orange-400 rounded-lg hover:bg-orange-500"
          to={`/subcategory/${id}`}
        >
          Abandon
        </Link>}

        {!id && <Link
          className="p-2 mt-6 text-center bg-orange-400 rounded-lg hover:bg-orange-500"
          to={`/subcategory`}
        >
          Abandon
        </Link>}

      </form>
    </div>
  )
}

export default Formulaire