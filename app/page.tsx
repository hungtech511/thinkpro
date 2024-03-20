import ImageComponent from "@/components/Image/ImageComponent";
import { getData } from "@/utils/fetchApi";
import { query } from "@/utils/queryList";
import Link from "next/link";
import {Product} from "@/interfaces/IProduct";

export default async function Home() {
  const result = await getData(query.HOME_PAGE);

  const {
    banner,
    category,
    flash_sale,
    nice_design,
    outstanding_product,
    posts,
    pre_order,
    promotion_highlights,
    promotions,
    setup_goodspace,
    suggestion,
    top_keywords,
  } = result.data;

  console.log(category);
  

  return (
    <main className="bg-base-100">
      <div className="container py-8">
        <section
          style={{
            color: banner.color,
            backgroundColor: banner.background_color,
          }}
          className="section-banner"
        >
          <div className="flex">
            <div className="w-1/2 desktop:w-1/3 px-6 py-8">
              <h1 className="text-h2 font-semibold">{banner.title}</h1>
              <p className="mt-2">{banner.description}</p>
              <div className="mt-6">
                <Link
                  style={{
                    color: banner.button_color,
                    borderColor: banner.button_color,
                  }}
                  href={banner.button_url}
                  className="t-button inline-flex items-center space-x-2 border w-full desktop:w-auto t-button--md t-button--solid"
                >
                  <span>{banner.button_text}</span>
                  <i className="w-4 h-4 i-semi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="w-1/2 desktop:w-2/3 overflow-hidden">
              <Link
                href={banner.banner_url}
              >
                <ImageComponent srcImage={banner.cover ? banner.cover : banner.thumbnail} alt={banner.title} width={1600} height={600} className="t-img h-full w-full object-cover"/>
              </Link>
            </div>
          </div>
        </section>

        {/* Section Category */}
        <section className="section-category mt-12">
          <h2 className="font-semibold">
            {category.title}
          </h2>
          <div className="mt-5">
            <div className="py-4 desktop:py-6 px-4 desktop:px-9 bg-base rounded overflow-hidden">
              <div className="grid grid-cols-4 desktop:grid-cols-8 gap-4">
                  {
                    category?.items.map((product:Product,index:number) => {
                      return(
                        <div key={product.id}>
                          <Link className="flex flex-col justify-center px-3 pb-1 hover:bg-base-100 rounded-xl transition-all" href={product.slug}>
                              <div className="aspect-w-1 aspect-h-1">
                                  <ImageComponent alt={product.shared_url} width={300} height={300} srcImage={product.icon}/>
                              </div>
                              <span className="block mt-2 text-center font-semibold">{product.name}</span>
                              <span className="block mt-1 text-center text-sm">{product.total} sản phẩm</span>
                          </Link>
                        </div>
                      )
                    })
                  }
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
