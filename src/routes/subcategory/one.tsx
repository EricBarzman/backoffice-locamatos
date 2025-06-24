import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";

import { SubCategoriesDto } from "../../types/categories.type"
import { useSubCategories } from "../../hooks/useSubCategories";

import TableOne from "../../components/subcategory/tableOne"


function SubCategoryPage() {

  const [subcat, setSubcat] = useState<SubCategoriesDto>();
  const { getOneSubCategoryById } = useSubCategories();
  
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getOneSubCategoryById(id!).then(data => setSubcat(data));
  }, [location])

  if (!subcat) return <h2>Loading</h2>

  return (
    <TableOne subcategory={subcat} />
  )
}

export default SubCategoryPage