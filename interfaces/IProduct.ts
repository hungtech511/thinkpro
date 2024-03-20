export interface Product {
    id: number;
    name: string;
    description: string;
    parent_id: number | null;
    slug: string;
    icon: string;
    brands: any[]; // You might want to define a type for brands if it has a specific structure
    thumbnail: string;
    total: number;
    shared_url: string;
  }