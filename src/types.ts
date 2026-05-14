export interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  description: string;
  ingredients: string[];
  badge?: string;
  category: string;
}
