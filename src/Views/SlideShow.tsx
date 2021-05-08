import React from "react";
import { Carousel } from "../Components/ui/Carousel";

export const SlideShow = () => {
  const carousel = {
    show: true,
    width: 760,
    height: 460,
    items: [
      { src: "/images/photo1.jpeg" },
      { src: "/images/photo2.jpeg" },
      { src: "/images/photo3.jpeg" },
      { src: "/images/photo4.jpeg" },
      { src: "/images/photo5.jpeg" },
    ],
  };

  return (
    <div className="App">
      <Carousel
        width={carousel.width}
        height={carousel.height}
        items={carousel.items}
      ></Carousel>
    </div>
  );
};
