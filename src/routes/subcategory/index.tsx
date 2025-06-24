import { useEffect, useState } from 'react';
import { useSubCategories } from '../../hooks/useSubCategories'

import { SubCategoriesDto } from '../../types/categories.type'

import TableMany from '../../components/subcategory/tableMany'
import { Link, useLocation } from 'react-router-dom';


function SubCategoriesPage() {

  const { getAllSubCategories } = useSubCategories();
  const [cats, setCats] = useState<SubCategoriesDto[]>([]);
  const location = useLocation();

  useEffect(() => {
    getAllSubCategories().then(data => setCats(data!));
  }, [location])

  return (
    <main className='py-6 px-20 w-2/5'>
      <h3 className='font-bold text-xl mb-6'>Sous-catégories</h3>
      <Link
        className='bg-amber-500 text-white hover:bg-amber-600 rounded-lg block w-1/3 text-center p-2'
        to="/subcategory/add"
      >
        Créer
      </Link>
      <TableMany subcategories={cats} />
    </main>
  )
}

export default SubCategoriesPage