"use client";
import { Product } from "@/interfaces/IProduct";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import dynamic from 'next/dynamic'
import ProductItem from "@/components/Product/Product";
import Link from "next/link";

interface PreOrderProps {
  preOrder: {
    product_items: Product[];
  };
}

const PreOrder: React.FC<PreOrderProps> = ({ preOrder }) => {

  return (
    <div className="section-pre-order">
      <div className="relative">
        <div className="flex items-center space-x-2">
          <h3 className="text-h3 font-semibold">Pre-Order</h3>
          <h3 className="ml-4 text-h3 font-semibold text-base-content-300">
            Đặt sớm giá ngon
          </h3>
        </div>
        <div className="mt-6">
          <Swiper
            className="page-slide"
            slidesPerView={4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
          >
            {preOrder.product_items.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link
                    style={{ marginLeft: index === 0 ? 0 : 12, height: "100%" }}
                    key={product.product_id}
                    className="t-product-item"
                    href={`${product.shared_url}`}
                  >
                    <ProductItem product={product}></ProductItem>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
