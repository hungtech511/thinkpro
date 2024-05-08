"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { promotionTabsData } from "@/utils/navigationData";
import { navigationSettings } from "@/utils/sliderItem";
import { Product } from "@/interfaces/IProduct";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ProductItem from "@/components/Product/Product";



const updatedNavigationSettings = {
  ...navigationSettings,
  slidesToScroll:6,
  variableWidth: true, 
  arrows:false
};

interface PromotionHighlight {
  promotionHighlights: {
    product_items: Product[];
  };
}

const PromotionHighlight: React.FC<PromotionHighlight> = ({
  promotionHighlights,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [chooseCategoryID, setChooseCategoryID] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(
    promotionHighlights.product_items
  );

  useEffect(() => {
    const filteredProducts = (
      promotionHighlights["product_items"] as Product[]
    ).filter((product) => product.category_id === chooseCategoryID);
    setFilteredProducts(filteredProducts);
  }, [promotionHighlights, chooseCategoryID]);


  return (
    <section className="section-outstanding-promotional-product">
      <div className="relative">
        <h3 className="font-semibold">Sản phẩm khuyến mãi nổi bật</h3>
        <Slider
          className="navigation-slide mt-6"
          {...updatedNavigationSettings}
        >
          {promotionTabsData.map((tag, index) => {
            return (
              <div key={tag.id}>
                <div
                  style={{ marginLeft: index === 0 ? 0 : "8px" }}
                  className={`t-tag t-tag--light t-tag--xl ${
                    index === activeIndex && "t-tag--solid"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setChooseCategoryID(tag.id);
                  }}
                >
                  {tag.name}
                </div>
              </div>
            );
          })}
        </Slider>

        <div className="mt-6">
          <Swiper
            className="page-slide"
            slidesPerView={4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
          >
            {filteredProducts.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link
                    style={{ marginLeft: index === 0 ? 0 : 12, height: "100%" }}
                    key={product.product_id}
                    className="t-product-item"
                    href={`${product.shared_url}`}
                  >
                    <ProductItem show_tags product={product}></ProductItem>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PromotionHighlight;
