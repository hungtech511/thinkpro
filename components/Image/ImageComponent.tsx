"use client"
import { ImageProps } from "@/interfaces/IimageProps";
import Image from "next/image";
import React from "react";

const ImageComponent: React.FC<ImageProps> = ({
  srcImage,
  alt,
  width,
  height,
  className,
}) => {


  return (
    <Image
      className={className}
      src={"https://images.thinkgroup.vn/unsafe/https://media-api-beta.thinkpro.vn/" + srcImage}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
