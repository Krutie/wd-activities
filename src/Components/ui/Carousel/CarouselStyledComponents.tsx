// STYLED COMPONENTS
import styled from "styled-components";
import { ContainerProps } from './CarouselTypes';

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  position: fixed;
  top: 50%;
`;

export const LeftArrow = styled(Arrow)`
  left: 1rem;
  position: absolute;
  z-index: 1;
`;

export const RightArrow = styled(Arrow)`
  right: 1rem;
  position: absolute;
  z-index: 1;
`;

export const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
`;

export const CarouselImageWrapper = styled.div<ContainerProps>`
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
`;