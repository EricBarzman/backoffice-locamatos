import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ProductDto } from '../../types/product.type';

import Formulaire from '../../components/product/formulaire';
import { useProducts } from '../../hooks/useProducts';
import AbandonBtn from '../../components/abandonBtn/abandonBtn';


const emptyProduct: ProductDto = {
  _id: '',
  nom: "",
  description: "",
  imageUrls: [],
  price: 0,
  category: {
    _id: "",
    nom: '',
    slug: ''
  },
  subcategory: {
    _id: "",
    nom: '',
    slug: '',
    category: {
      nom: '',
      slug: "",
    },
  },
  categoryId: '',
  subcategoryId: ''
}

function ProductCreateOrEdit() {

  const navigate = useNavigate();
  const { getOneProductById, addProduct, editProduct } = useProducts();

  let { id } = useParams();

  const [product, setProduct] = useState<ProductDto>(emptyProduct);

  useEffect(() => {
    if (id) getOneProductById(id).then(data => {
      if (data)
        setProduct(data)
    })
  }, [])


  async function handleSubmit(e: any) {
    e.preventDefault();

    if (product.nom === "") {
      alert("Vous devez donner un nom au produit");
      return;
    }

    if (product.price === 0) {
      alert("Vous devez donner un prix");
      return;
    }

    if (product.categoryId === "") {
      alert("Choisissez une catégorie");
      return;
    }

    if (product.subcategoryId === "") {
      alert("Choisissez une sous-catégorie");
      return;
    }

    try {
      if (id) {
        await editProduct(id, product);
      }
      if (!id) {
        const result = await addProduct(product);
        if (result) id = result._id
      }
      navigate(`/product/${id}`);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <aside className='border-l w-2/3 border-gray-200 py-6 px-20'>
      <div className="w-full p-4 flex flex-col">
        <h3 className='font-bold text-xl mb-6'>{product.nom}</h3>

        <Formulaire product={product} handleSubmit={handleSubmit} setItem={setProduct} />

        {id && <AbandonBtn label="Abandon" path={`/product/${id}`} />}

        {!id && <AbandonBtn label="Abandon" path={`/product`} />}
      </div>

    </aside>
  )
}

export default ProductCreateOrEdit