import { useEffect, useState } from "react";
import { CategoriesDto } from "../../types/categories.type"
import { Link, useNavigate } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

function Formulaire({ id }: { id: undefined | string }) {

  // const keys = Object.keys(category);
  const navigate = useNavigate();
  const { editCategory, getOneCategoryById, addCategory } = useCategories();

  const [category, setCategory] = useState<CategoriesDto>({
    _id: "",
    nom: "",
    slug: "",
  });

  useEffect(() => {
    if (id) {
      getOneCategoryById(id).then(cat => setCategory(cat!))
    };
  }, [])

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      if (id) {
        await editCategory(id, category);
      }
      if (!id) {
        const result = await addCategory(category);
        if (result) id = result._id
      }
      navigate(`/category/${id}`);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h3 className='font-bold text-xl mb-10'>{category.nom}</h3>
      <form className="p-4 flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setCategory({ ...category, nom: e.target.value })}
          className="border-2 p-2 border-gray-200"
          value={category.nom}
          placeholder="Nom..."
        />
        <button className="cursor-pointer mt-6 rounded-lg p-2 bg-teal-400" type="submit">
          OK
        </button>

        {id && <Link
          className="p-2 mt-6 text-center bg-orange-400 rounded-lg hover:bg-orange-500"
          to={`/category/${id}`}
        >
          Abandon
        </Link>}

        {!id && <Link
          className="p-2 mt-6 text-center bg-orange-400 rounded-lg hover:bg-orange-500"
          to={`/category`}
        >
          Abandon
        </Link>}

      </form>
    </div>
  )
}

export default Formulaire