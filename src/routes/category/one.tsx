import { useEffect, useState } from "react"
import TableOne from "../../components/category/tableOne"
import { CategoriesDto } from "../../types/categories.type"
import { useCategories } from "../../hooks/useCategories";
import { useLocation, useParams } from "react-router-dom";

function CategoryPage() {

  const [cat, setCat] = useState<CategoriesDto>();
  const { getOneCategoryById } = useCategories()
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getOneCategoryById(id!).then(data => setCat(data));
  }, [location])

  if (!cat) return <h2>Loading</h2>

  return (
    <TableOne category={cat} />
  )
}

export default CategoryPage