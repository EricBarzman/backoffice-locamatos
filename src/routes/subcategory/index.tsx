import { useEffect, useState } from 'react';
import { useSubCategories } from '../../hooks/useSubCategories'

import { CategoriesDto } from '../../types/categories.type'

import TableMany from '../../components/page/tableMany'
import { Link } from 'react-router-dom';


function SubCategoriesPage() {

  const { getAllSubCategories } = useSubCategories();
  const [cats, setCats] = useState<CategoriesDto[]>([]);

  useEffect(() => {
    getAllSubCategories().then(data => setCats(data!));
  }, [])

  console.log(cats);

  if (cats.length === 0) return <h2>Loading</h2>

  return (
    <main className='py-6 px-20 w-2/5'>
      <h3 className='font-bold text-xl mb-6'>Sous-catégories</h3>
      <Link
        className='bg-amber-500 text-white hover:bg-amber-600 rounded-lg block w-1/3 text-center p-2'
        to="/category/add"
      >
        Créer
      </Link>
      <TableMany categories={cats} />
    </main>
  )
}

export default SubCategoriesPage