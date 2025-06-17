import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";

import { SubCategoriesDto } from "../../types/categories.type"
import { useSubCategories } from "../../hooks/useSubCategories";

import TableOne from "../../components/subcategory/tableOne"


function SubCategoryPage() {

  const [cat, setCat] = useState<SubCategoriesDto>();
  const { getOneSubCategoryById } = useSubCategories();
  
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getOneSubCategoryById(id!).then(data => setCat(data));
  }, [location])

  if (!cat) return <h2>Loading</h2>

  return (
    <TableOne category={cat} />
  )
}

export default SubCategoryPage