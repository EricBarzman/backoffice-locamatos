import axios from "axios";
import { SubCategoriesDto } from "../types/categories.type";

export const useSubCategories = () => {

  const str = process.env.REACT_APP_BASE_URL + "/subcategory/";

  async function getAllSubCategories() : Promise<SubCategoriesDto[] | undefined> {
    try {
      const result = await axios.get(str);
      return result.data as unknown as SubCategoriesDto[];
      
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneSubCategoryById(id: string) : Promise<SubCategoriesDto | undefined> {
    try {
      const result = await axios.get(str + id);
      return result.data as unknown as SubCategoriesDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  async function addSubCategory(data: SubCategoriesDto) {
    try {
      const result = await axios.post(str, data);
      return result.data as unknown as SubCategoriesDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  async function editSubCategory(id: string, data: SubCategoriesDto) {
    try {
      await axios.post(str + id, data);
      
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteSubCategory(id: string) {
    try {
      await axios.delete(str + "/" + id);
      
    } catch (error) {
      console.error(error);
    }
  }

  return { getAllSubCategories, getOneSubCategoryById, editSubCategory, addSubCategory, deleteSubCategory };
}