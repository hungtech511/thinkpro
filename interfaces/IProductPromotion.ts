export interface IPromotion{
  map(arg0: (product: any, index: any) => import("react").JSX.Element): unknown;
     id: number;
    title: string;
    thumbnail: string | null;
    slug: string;
    categories: Category[];
    images: string[];
    max_percent: number;
    min_sale_price: number;
    is_flash_sale: boolean;
    description: string;
    start_time: string;
    expired_time: string | null;
    
}

export interface Category {
    quantity: string;
    // Assuming the category object has an id and name
    id: number;
    name: string;
  }