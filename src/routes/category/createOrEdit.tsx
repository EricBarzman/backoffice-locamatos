import { useParams } from 'react-router-dom'
import Formulaire from '../../components/category/formulaire';

function CategoryCreateOrEdit() {

  const { id } = useParams();

  return (
    <aside className='border-l w-1/3 border-gray-200 py-6 px-20'>
      <Formulaire id={id} />
    </aside>
  )
}

export default CategoryCreateOrEdit