'use client';
import React from 'react';
import Slider from "react-slick";
import { navigationSettings } from "@/utils/sliderItem";


interface ProductSuggestSliderProps {
    tabs: {
        name: string;
        value: string;
        type: string;
    }[];

}

const updatedNavigationSettings = {
    ...navigationSettings,
    slidesToScroll:6,
    variableWidth: true, 
    arrows:false
};

const SuggestProductSlider: React.FC<ProductSuggestSliderProps> = ({ tabs }) => {

    return (
        <Slider
            className="navigation-slide mt-6"
            {...updatedNavigationSettings}
        >
            {tabs.map((tag, index) => {
                return (
                    <div key={index}>
                        <div
                            style={{ marginLeft: index === 0 ? 0 : "8px" }}
                            className={`t-tag t-tag--light t-tag--xl`}
                        >
                            {tag.name}
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
};

export default SuggestProductSlider;
