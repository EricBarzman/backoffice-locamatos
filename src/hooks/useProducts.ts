import axios from "axios";
import { ProductDto, ProductSentDto } from "../types/product.type";

export const useProducts = () => {

  const str = process.env.REACT_APP_BASE_URL + "/product";

  async function getAllProducts() : Promise<ProductDto[] | undefined> {
    try {
      const result = await axios.get(str);
      return result.data as unknown as ProductDto[];
      
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneProductById(id: string) : Promise<ProductDto | undefined> {
    try {
      const result = await axios.get(str + "/" + id);
      return result.data as unknown as ProductDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  async function addProduct(data : ProductSentDto) {
    try {
      const result = await axios.post(str, data);
      return result.data as unknown as ProductDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  async function editProduct(id: string, data: ProductSentDto) {
    try {
      await axios.post(str + "/" + id, data);
      
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteProduct(id: string) {
    try {
      await axios.delete(str + "/" + id);
      
    } catch (error) {
      console.error(error);
    }
  }

  return { getAllProducts, getOneProductById, editProduct, addProduct, deleteProduct };
}