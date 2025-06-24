import { CategoriesDto, SubCategoriesDto } from "./categories.type";

export interface ProductDto {
  categoryId: string;
  subcategoryId: string;
  _id?: string;
  nom: string;
  description: string;
  imageUrls: string[] | [];
  price: number;
  category: CategoriesDto;
  subcategory: SubCategoriesDto;
}

export interface ProductSentDto {
  _id?: string;
  nom: string;
  description: string;
  imageUrls: string[];
  price: number;
  categoryId: string;
  subcategoryId: string;
}