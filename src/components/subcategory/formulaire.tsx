import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSubCategories } from "../../hooks/useSubCategories";
import { SubCategoriesDto } from "../../types/categories.type"

function Formulaire({ id }: { id: undefined | string }) {

  // const keys = Object.keys(category);
  const navigate = useNavigate();
  const { editSubCategory, getOneSubCategoryById, addSubCategory } = useSubCategories();

  const [subcategory, setSubCategory] = useState<SubCategoriesDto>({
    _id: "",
    nom: "",
    slug: "",
  });

  useEffect(() => {
    if (id) {
      getOneSubCategoryById(id).then(cat => setSubCategory(cat!))
    };
  }, [])

  async function handleSubmit(e: any) {
    e.preventDefault();
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