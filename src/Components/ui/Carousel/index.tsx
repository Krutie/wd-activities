import React, { useState, useEffect } from "react";
import { CarouselImageProps, CarouselProps, ControlProps, } from './Types';
import { LeftArrow, RightArrow, Container, CarouselImageWrapper } from './StyledComponents';
import { slide } from './Utils';

// CarouselImage COMPONENT
const CarouselImage: React.FC<CarouselImageProps> = ({ src }) => {
  const styles = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "inherit",
    width: "inherit",
    // transition: "background-image .3s ease-in .3s",
  };
  return <div id="slide" style={styles}></div>;
};

// Control COMPONENT
const Control: React.FC<ControlProps> = ({ handler, symbol }) => {
  return <div onClick={handler}> {symbol}</div>;
};


// PARENT COMPONENT

export const Carousel: React.FC<CarouselProps> = ({ items, width, height }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Ensure activeIndex never goes out of bound in either direction
  const clickLeftIndex = activeIndex > 0 ? activeIndex - 1 : items.length - 1;

  const clickRightIndex =
    activeIndex === items.length - 1 ? 0 : activeIndex + 1;

  function animateSlide(direction: string) {
    const el = document.getElementById("slide");
    if(el && direction) slide(el, direction)
  }

  const keyboardEventHandler = (event: KeyboardEvent): void[] => {
    let handler: void[];
    switch (event.key) {
      case 'ArrowLeft':
        handler = [setActiveIndex(clickLeftIndex), animateSlide("left")]
        break;
      case 'ArrowRight':
        handler = [setActiveIndex(clickRightIndex), animateSlide("right")]
        break;
      default:
        handler = []
        break;
    }
    return handler;
  };

  useEffect(() => {
    document.addEventListener("keydown", keyboardEventHandler, false);
    // Clean up event listener
    return () => {
      document.removeEventListener("keydown", keyboardEventHandler, false);
    }
  });

  return (
    <Container height={height} width={width}>
      <LeftArrow>
        <Control
          symbol="&#9664;"
          handler={(e) => [
            setActiveIndex(clickLeftIndex),
            animateSlide("left"),
          ]}
        ></Control>
      </LeftArrow>
      <RightArrow>
        <Control
          symbol="&#9654;"
          handler={(e) => [
            setActiveIndex(clickRightIndex),
            animateSlide("right"),
          ]}
        ></Control>
      </RightArrow>

      <CarouselImageWrapper height={height} width={width}>
        <pre> Try with LeftArrow and RightArrow keys.</pre>
        <CarouselImage src={items[activeIndex].src}></CarouselImage>
      </CarouselImageWrapper>
    </Container>
  );
};
