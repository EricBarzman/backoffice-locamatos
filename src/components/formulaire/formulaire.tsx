import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import { useSubCategories } from "../../hooks/useSubCategories";
import { CategoriesDto, SubCategoriesDto } from "../../types/categories.type";

function Formulaire({
  id,
  item,
  type,
  handleSubmit,
  setItem
}: {
  id: undefined | string,
  item : any,
  type: string,
  handleSubmit: (e: any) => Promise<void>,
  setItem: (e:any) => void,
}) {

  const [categories, setCategories] = useState<CategoriesDto[]>([])
  const [subcategories, setSubCategories] = useState<SubCategoriesDto[]>([])

  const { getAllCategories } = useCategories()
  const { getAllSubCategories } = useSubCategories()

  useEffect(() => {
    getAllCategories().then(data => setCategories(data!));
    getAllSubCategories().then(data => setSubCategories(data!))
  }, [])

  const keys = Object.keys(item);
  
  return (
    <div className="w-full">
      <h3 className='font-bold text-xl mb-6'>{item.nom}</h3>
      <form className="p-4 flex flex-col" onSubmit={handleSubmit}>
        
        {keys.map((key, index) => {

          // N'affiche pas l'id
          if (key === '_id') return (<></>)
          if (key === '__v') return (<></>)

          // Un input text
          if (typeof Object.values(item)[index] === "string") return (
            <div className="p-2">
              <label className="mb-2 text-sm font-bold">{key}</label>
              <input
                className="w-full border-2 p-2 border-gray-200"
                name={key}
                type="text"
                value={`${Object.values(item)[index]}`}
                placeholder={`${Object.values(item)[index]}`}
                onChange={(e) => setItem({ ...item, [key] : e.target.value})}
              />
            </div>
          )

          // Un input nombre
          if (typeof Object.values(item)[index] === "number") return (
            <div className="p-2">
              <label className="mb-2 text-sm font-bold">{key}</label>
              <input
                className="w-full border-2 p-2 border-gray-200"
                name={key}
                type="number"
                value={Object.values(item)[index] as number}
                onChange={(e) => setItem({ ...item, [key] : parseInt(e.target.value)})}
              />
            </div>
          )

          // Un input array
          if (typeof Object.values(item)[index] === "object") return (
            <div className="p-2 flex flex-col mb-2">
              <label className="mb-2 text-sm font-bold">{key}</label>
              <select
                className="p-2 rounded-md"
                name={key}
                value={item[key] as string[]}
                onChange={(e) => setItem({ ...item, [key] : e.target.value})}
              >
                {key === 'categories' ? categories.map(cat =>
                  <option key={cat.nom} value={cat._id}>{cat.nom}</option>
                ) : (<></>)}
                {key === 'subcategories' ? subcategories.map(cat =>
                  <option key={cat.nom} value={cat._id}>{cat.nom}</option>
                ) : (<></>)}          
              </select>
            </div>
          )

        })}
        
        <button className="cursor-pointer mt-6 rounded-lg p-2 bg-teal-400" type="submit">
          OK
        </button>

        {id && <Link
          className="p-2 mt-6 text-center bg-orange-400 rounded-lg hover:bg-orange-500"
          to={`/${type}/${id}`}
        >
          Abandon
        </Link>}

        {!id && <Link
          className="p-2 mt-6 text-center bg-orange-400 rounded-lg hover:bg-orange-500"
          to={`/${type}`}
        >
          Abandon
        </Link>}

      </form>
    </div>
  )
}

export default Formulaire