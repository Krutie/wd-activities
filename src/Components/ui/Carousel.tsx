import React, { useState, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  position: fixed;
  top: 50%;
`;

const LeftArrow = styled(Arrow)`
  left: 1rem;
  position: absolute;
  z-index: 1;
`;

const RightArrow = styled(Arrow)`
  right: 1rem;
  position: absolute;
  z-index: 1;
`;

const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
`;

const CarouselImageWrapper = styled.div<ContainerProps>`
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
`;

interface ContainerProps {
  width: number;
  height: number;
}

interface CarouselImageProps {
  src: string;
}

interface CarouselProps {
  width: number;
  height: number;
  items: CarouselImageProps[];
}

interface ControlProps {
  symbol: string;
  handler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface TransitionMap {
  [index: string]: void []
}

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

const Control: React.FC<ControlProps> = ({ handler, symbol }) => {
  return <div onClick={handler}> {symbol}</div>;
};

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

  const slide = (el: HTMLElement, direction: string) => {
    const left = direction === 'left' ? '5%' : '-5%';

    gsap.fromTo(
      el,
      {
        left,
        position: "absolute",
        autoAlpha: 0,
      },
      {
        duration: 1,
        left: 0,
        position: "absolute",
        autoAlpha: 1,
        ease: "circ",
      }
    );
  }

  const handler = (event: KeyboardEvent): void[] => {

    const transitionMap: TransitionMap = {
      'ArrowLeft': [setActiveIndex(clickLeftIndex), animateSlide("left")],
      'ArrowRight': [setActiveIndex(clickRightIndex), animateSlide("right")]
    }
    
    return transitionMap[event.key] || [];
  };

  useEffect(() => {
    document.addEventListener("keydown", handler, false);
    // Clean up event listener
    return () => {
      document.removeEventListener("keydown", handler, false);
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
        <CarouselImage src={items[activeIndex].src}></CarouselImage>
      </CarouselImageWrapper>
    </Container>
  );
};
