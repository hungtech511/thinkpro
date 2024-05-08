"use client";
import { Product } from "@/interfaces/IProduct";
import { formatNumber } from "@/utils/formatInput";
import React, { useEffect, useState } from "react";
import ImageComponent from "../Image/ImageComponent";

interface ProductItemProps {
  product: Product;
  show_tags?: boolean;
  show_specs?: boolean;
}

interface CountdownTimerProps {
  targetDate: string;
  suppressHydrationWarning?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return null; // Return null if no time left
  }

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="inline-flex">
    <div className="t-tag t-tag--solid t-tag--md t-tag--danger">
    <p>
      {days && `${days} ngày, `}
      {hours && `${hours}h `}
      {minutes && `${minutes}p `}
      {seconds && `${seconds}s`}
    </p>
    </div>
    </div>
  );
};

export const ProductItem: React.FC<ProductItemProps> = ({ product,show_tags, show_specs }) => {
  return (
    <>
        {product?.applied_channel?.type === "PRE_ORDER" && (
          <div className="absolute top-4 left-4 z-[1] flex items-center space-x-1">
            <div className="flex flex-col items-start space-y-1">
              <div className="t-tag inline-flex t-tag--solid t-tag--md !bg-tertiary !text-tertiary-content">
                <span>Còn {product?.applied_channel?.purchase_limit} suất</span>
              </div>
              <CountdownTimer
                    targetDate={product?.applied_channel?.expired_time}
                    suppressHydrationWarning 
                  ></CountdownTimer>
            </div>
          </div>
        )}
      <div className="relative">
        <div className="t-product-item__image">
          <ImageComponent
            alt={product.name}
            srcImage={product.image}
            width={460}
            height={460}
          />
        </div>
      </div>
      <div className="t-product-item__info">
        <div className="t-product-item__title">{product.name}</div>
        <div className="t-product-item__price-wrapper">
          <span className="t-product-item__secondary-text">Từ</span>
          <span className="t-product-item__price">
            {formatNumber(product.price)}
          </span>
          <div className="t-tag t-tag--light t-tag--sm t-tag--secondary">
            -{product.price_discount_percent}%
          </div>
        </div>
        <div className="t-product-item__color-wrapper">
          <span className="t-product-item__secondary-text">Màu</span>
          {product.colors.map((color, index) => {
            return (
              <div
                key={index}
                className="t-color t-color--sm"
                style={{
                  border: `1px solid ${color.code}`,
                  background: `${color.code}`,
                }}
              ></div>
            );
          })}
        </div>
        {
          show_tags && (
            <div className="t-flex-gap mt-2">
            <div className="t-flex-gap__wrapper">
              {product.model_value.spec.split(", ").map((spec, index) => {
                return (
                  <div
                    key={index}
                    className="t-tag t-tag--solid t-tag--md"
                  >
                    {spec}
                  </div>
                );
              })}
            </div>
          </div>
          )
        }
        <div className="t-flex-gap mt-2"><div className="t-flex-gap__wrapper"></div></div>
        {
          show_specs && (
            <>
            <hr className="my-3" />
            <div className="t-product-item__specs" dangerouslySetInnerHTML={{ __html: product.specs }} ></div>
            </>
          )
        }
        {product.has_gift && (
          <>
            <hr className="mt-3" />
            <div className="t-product-item__gift">
              <span className="t-product-item__gift-text">Quà tặng</span>
              <span className="t-product-item__gift-amount">
                {formatNumber(product.gift_amount)}
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductItem;
