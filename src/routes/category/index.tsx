import { useEffect, useState } from 'react';
import { useCategories } from '../../hooks/useCategories'

import { CategoriesDto } from '../../types/categories.type'

import TableMany from '../../components/page/tableMany'
import { Link } from 'react-router-dom';


function CategoriesPage() {

  const { getAllCategories } = useCategories();
  const [cats, setCats] = useState<CategoriesDto[]>([]);

  useEffect(() => {
    getAllCategories().then(data => setCats(data!));
  }, [])

  if (cats.length === 0) return <h2>Loading</h2>

  return (
    <main className='py-6 px-20 w-2/5'>
      <h3 className='font-bold text-xl mb-6'>Catégories</h3>
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

export default CategoriesPage