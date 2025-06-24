export interface CategoriesDto {
  _id? : string,
  nom: string;
  slug: string;
}

export interface SubCategoriesDto {
  _id? : string,
  nom: string;
  slug: string;
  category: CategoriesDto;
}