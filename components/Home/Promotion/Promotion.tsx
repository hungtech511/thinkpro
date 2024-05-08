"use client";
import React from "react";
import { IPromotion } from "@/interfaces/IProductPromotion";
import Link from "next/link";

import { formatDate, formatNumber } from "@/utils/formatInput";
import ImageComponent from "@/components/Image/ImageComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "./Promotion.scss";

interface Promotions {
  promotions: IPromotion[];
}

const Promotion: React.FC<Promotions> = ({ promotions }) => {
  return (
    <>
      <section className="section-promotion">
        <h3 className="font-semibold">Chương trình khuyến mãi nổi bật</h3>
        <div className="mt-6 relative">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            slidesPerView={2.8}
            spaceBetween={16}
            className="page-slide promotion-slide"
          >
            {promotions.map((promotion, index) => {
              return (
                <SwiperSlide key={promotion.id} style={{ width: 500 }}>
                  <Link
                    href={`khuyen-mai/${promotion.slug}`}
                    className="flex flex-col relative bg-base rounded p-4"
                  >
                    <div className="mb-2 flex items-center space-x-2">
                      {promotion.categories.map((category, index) => {
                        return (
                          <div
                            key={index}
                            className="t-tag t-tag--solid t-tag--md"
                          >
                            {category.quantity} {category.name}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold line-clamp-1">
                        {promotion.title}
                      </h4>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="t-tag bg-promotion-light t-tag--solid t-tag--md">
                        <span className="font-semibold text-gradient bg-promotion-gradient">
                          -{promotion.max_percent}%
                        </span>
                      </div>
                      <div className="t-tag bg-promotion-light t-tag--solid t-tag--md">
                        <span className="font-semibold text-gradient bg-promotion-gradient">
                          Chỉ từ {formatNumber(promotion.min_sale_price)}
                        </span>
                      </div>
                    </div>
                    <span className="mt-2 text-sm text-base-content-300">
                      Từ {formatDate(promotion.start_time)}
                    </span>
                    <div className="mt-3">
                      <div className="flex items-center space-x-2">
                        {promotion?.images.slice(0, 6).map((image, index) => (
                          <div
                            key={index} // Add key prop
                            className="relative rounded border overflow-hidden cursor-pointer"
                            style={{ width: "16.6667%" }}
                          >
                            {index === 5 && (
                              <>
                                <div className="absolute inset-0 bg-base-overlay-30 z-[1]"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[2]">
                                  <span className="text-white font-semibold">
                                    +{promotion.images.length - 6}
                                  </span>
                                </div>
                              </>
                            )}
                            <div className="aspect-w-1 aspect-h-1">
                              <ImageComponent
                                srcImage={image}
                                alt={promotion.title}
                                width={200}
                                height={200}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Promotion;
