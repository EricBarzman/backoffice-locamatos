import { useEffect, useState } from "react"
import TableOne from "../../components/page/tableOne"
import { CategoriesDto } from "../../types/categories.type"
import { useCategories } from "../../hooks/useCategories";
import { useParams } from "react-router-dom";

function SubCategoryPage() {

  const [cat, setCat] = useState<CategoriesDto>();
  const { getOneCategoryById } = useCategories()
  const { id } = useParams();

  useEffect(() => {
    getOneCategoryById(id!).then(data => setCat(data));
  }, [])

  if (!cat) return <h2>Loading</h2>

  return (
    <TableOne category={cat} />
  )
}

export default SubCategoryPage