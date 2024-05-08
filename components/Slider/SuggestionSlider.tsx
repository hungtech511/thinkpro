
import React, { useState } from 'react';
import Slider from "react-slick";
import { navigationSettings } from "@/utils/sliderItem";

interface SuggestionSliderProps{
    slider: Tab[],
    setChooseCategory: any
}

export interface Tab {
    name: string;
    value: string;
    type: string;
  }

const updatedNavigationSettings = {
    ...navigationSettings,
    slidesToScroll: 6,
    variableWidth: true,
    arrows: false,
  };

const SuggestionSlider: React.FC<SuggestionSliderProps> = ({slider, setChooseCategory}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Slider
        className="navigation-slide mt-6"
        {...updatedNavigationSettings}
      >
        {slider.map((tag, index) => {
          return (
            <div key={index}>
              <div
                style={{ marginLeft: index === 0 ? 0 : "8px" }}
                className={`t-tag t-tag--light t-tag--xl ${
                  index === activeIndex && "t-tag--solid"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setChooseCategory(tag.value);
                }}
              >
                {tag.name}
              </div>
            </div>
          );
        })}
      </Slider>
    );
};

export default SuggestionSlider;