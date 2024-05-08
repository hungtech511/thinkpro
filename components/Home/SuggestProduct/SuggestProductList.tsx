import ProductItem from "@/components/Product/Product";
import { Product } from "@/interfaces/IProduct";
import Link from "next/link";

interface ProductsProps {
  products: {
    data: Product[];
    meta: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
    };
  };
}

const SuggestProductList: React.FC<ProductsProps> = async ({ products }) => {
  console.log(products);

  return (
    <div className="mt-6">
      <div className="t-product-list">
        <div className="t-product-list__container grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5">
          {products?.data.map((product: Product, _) => {
            return (
              <div className="t-product-item h-full" key={product.product_id}>
                <Link key={product.product_id} href={`${product.shared_url}`}>
                  <ProductItem show_specs product={product}></ProductItem>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuggestProductList;
