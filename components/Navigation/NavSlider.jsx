"use client"
import React, { useRef } from "react";
import { navigationData } from '@/utils/navigationData';
import Slider from "react-slick";
import Link from "next/link";
import ImageComponent from "../Image/ImageComponent";

import "./NavSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Create an object to store items by their id
const itemsById = {};

// Group items by their id
navigationData.forEach(item => {
  itemsById[item.id] = item;
});

// Add child items into their parent items
navigationData.forEach(item => {
  if (item.parent_id !== null && itemsById[item.parent_id]) {
    const parentItem = itemsById[item.parent_id];
    if (!parentItem.children) {
      parentItem.children = [];
    }
    // Check if the child is already present in the parent's children array
    const childIndex = parentItem.children.findIndex(child => child.id === item.id);
    if (childIndex === -1) {
      parentItem.children.push(item);
    }
  }
});

// Remove items with parent_id from the top level
const result = navigationData.filter(item => item.parent_id === null);

const NavSlider = () => {

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false
  };



  return (
    <>
      <Slider className="navigation-slider" ref={sliderRef} {...settings}>
        {
          result.map((product, index) => {
            // console.log(product);
            return (
              <div className="nav-item" key={product.id}>
                {
                  product.children ? <div className="shrink-0 flex items-center space-x-2 px-3 py-2 hover:bg-base-100 rounded-lg" href={product.shared_url}>
                    <ImageComponent className="t-img w-12 h-12 rounded-lg" srcImage={product.icon} width={96} height={96} alt={product.name} />
                    <span className="font-semibold text-md whitespace-nowrap">{product.name}</span>
                    {
                      product.children && <i className="i-semi-chevron-down w-3 h-3"></i>
                    }
                  </div> :
                  <Link className="shrink-0 flex items-center space-x-2 px-3 py-2 hover:bg-base-100 rounded-lg" href={product.shared_url}>
                  <ImageComponent className="t-img w-12 h-12 rounded-lg" srcImage={product.icon} width={96} height={96} alt={product.name} />
                  <span className="font-semibold text-md whitespace-nowrap">{product.name}</span>
                </Link>
                }
                {
                  product.children && <ul className="nav-list">
                    {
                      product.children.map((item, index) => {
                        return (
                          <li key={item.id}><Link href={item.shared_url}>{item.name}</Link></li>
                        )
                      })
                    }
                  </ul>
                }
              </div>
            )
          })
        }
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
};
export default NavSlider;