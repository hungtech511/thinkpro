import { Product } from "@/interfaces/IProduct";
import SuggestProductList from "./SuggestProductList";
import SuggestProductSlider from "./SuggestProductSlider";

interface SuggestProductProps {
  suggestProduct: {
    tabs: Tab[];
    title: string;
  },
  products: {
    data: Product[],
    meta: {
      current_page: number,
      last_page: number,
      per_page: number,
      total: number,
    }
  }
}

interface Tab {
  name: string;
  value: string;
  type: string;
}

const SuggestProduct: React.FC<SuggestProductProps> = ({ suggestProduct, products }) => {

  return (
    <div className="mt-12">
      <section className="section-suggestion-product">
        <h2 className="font-semibold">{suggestProduct.title}</h2>
        <div className="mt-4">
          <SuggestProductSlider tabs={suggestProduct.tabs} />
        </div>
        <div className="mt-4">
          <SuggestProductList products={products}/>
        </div>
      </section>
    </div>
  );
};

export default SuggestProduct;
