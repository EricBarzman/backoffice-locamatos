import { Link, useNavigate } from "react-router-dom"
// import { useCategories } from "../../hooks/useCategories";

function TableOne({ type, item }: { type : string; item : any }) {

  const keys = Object.keys(item);
  // const navigate = useNavigate();
  
  // const { deleteCategory } = useCategories();

  // async function handleDelete() {
  //   // eslint-disable-next-line no-restricted-globals
  //   if (!confirm("Voulez-vous vraiment supprimer cette catégorie ?")) return;

  //   await deleteCategory(category._id);
  //   navigate("/category");
  // }

  return (
    <aside className='py-6 px-20 border-l w-1/3'>
      <h3 className='font-bold text-xl'>{type}</h3>
      <div className='py-6 mb-4 flex flex-col'>
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
                <td key={key} className="border border-gray-500 p-3">{`${Object.values(item)[idx]}`}</td>
              ))}
              <td className="border border-gray-500 p-3 hover:bg-teal-100">
                <Link to={`edit`}>Editer</Link>
              </td>
            </tr>
          </tbody>
        </table>
        
        <Link className="p-3 mt-6 bg-teal-300 rounded-lg hover:bg-teal-400" to={`/${type}`}>
          Retour
        </Link>

        {/* <button
          className="p-3 mt-8 bg-red-700 rounded-lg text-white hover:bg-red-800"
          onClick={handleDelete}
        >
          Supprimer
        </button> */}
      </div>

    </aside>
  )
}

export default TableOne