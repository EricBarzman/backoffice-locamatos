import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useProducts } from '../../hooks/useProducts'
import { ProductDto } from '../../types/product.type'

import TableMany from '../../components/product/tableMany'


function ProductsList() {

  const { getAllProducts } = useProducts();
  const [products, setProducts] = useState<ProductDto[]>([]);
  const location = useLocation();

  useEffect(() => {
    getAllProducts().then(data => setProducts(data!));
  }, [location])

  return (
    <main className='py-6 px-20 w-2/5'>
      <h3 className='font-bold text-xl mb-6'>Catégories</h3>
      <Link
        className='bg-amber-500 text-white hover:bg-amber-600 rounded-lg block w-1/3 text-center p-2'
        to="/product/add"
      >
        Créer
      </Link>
      <TableMany products={products} />
    </main>
  )
}

export default ProductsList