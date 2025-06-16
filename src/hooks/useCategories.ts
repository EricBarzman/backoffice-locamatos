import axios from "axios";
import { CategoriesDto } from "../types/categories.type";

export const useCategories = () => {

  const str = process.env.REACT_APP_BASE_URL + "/category";

  async function getAllCategories() : Promise<CategoriesDto[] | undefined> {
    try {
      const result = await axios.get(str);
      return result.data as unknown as CategoriesDto[];
      
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneCategoryById(id: string) : Promise<CategoriesDto | undefined> {
    try {
      const result = await axios.get(str + "/" + id);
      return result.data as unknown as CategoriesDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  async function addCategory(data: CategoriesDto) {
    try {
      const result = await axios.post(str, data);
      return result.data as unknown as CategoriesDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  async function editCategory(id: string, data: CategoriesDto) {
    try {
      await axios.post(str + "/" + id, data);
      
    } catch (error) {
      console.error(error);
    }
  }

  return { getAllCategories, getOneCategoryById, editCategory, addCategory };
}