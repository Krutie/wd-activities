import React, { useEffect } from "react";
import { Carousel } from "../Components/ui/Carousel";
import { CarouselImageProps } from '../Components/ui/Carousel/Types';

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

  function preloadImages(items: CarouselImageProps[]) {
    items.forEach((item: CarouselImageProps) => {
      const img = new Image()
      img.src = item.src
    })
  }
  
  useEffect(() => {
    preloadImages(carousel.items)
  }, [carousel.items])

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
