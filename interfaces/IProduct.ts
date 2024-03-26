

export interface Product {
  id: number;
  name: string;
  description: string;
  parent_id: number | null;
  slug: string;
  icon: string;
  brands: Brand[];
  children?: Product[]; // Optional array of child products
  thumbnail: string;
  total: number;
  shared_url: string;
  sku_id: number;
  SKU: string;
  MPN: string;
  product_id: number;
  is_flash_sale: boolean;
  image: string;
  frame: string;
  category_id: number;
  applied_channel: any; // Adjust the type accordingly
  brand: Brand;
  price_before_discount: number;
  price_discount_percent: number;
  price: number;
  gift_amount: number;
  has_gift: boolean;
  colors: Color[];
  status: number;
  label_type: string;
  model_value: {
      spec: string;
      type: string;
      color: string;
  };
  specs: string;
  is_available: boolean;
}

