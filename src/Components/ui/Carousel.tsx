import React, { useState } from 'react'
import styled from 'styled-components'

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  position: fixed;
  top: 50%;
`

const LeftArrow = styled(Arrow)`
  left: 1rem;
  position: absolute;
`

const RightArrow = styled(Arrow)`
  right: 1rem;
  position: absolute;
`

const Container = styled.div<ContainerProps>`
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
`
interface ContainerProps {
  width: number
  height: number
}

interface CarouselImageProps {
  src: string
}

interface CarouselProps {
  width: number
  height: number
  items: CarouselImageProps[]
}

interface ControlProps {
  symbol: string
  handler: (e: React.MouseEvent<HTMLDivElement>) => void
}

const CarouselImage: React.FC<CarouselImageProps> = ({
  src
}) => {
  return (
    <img src={src} alt='' style={{ height: 'inherit', width: 'inherit' }} />
  )
}

const Control: React.FC<ControlProps> = ({ handler, symbol }) => {
  return <div onClick={handler}> {symbol}</div>
}

export const Carousel: React.FC<CarouselProps> = ({ items, width, height }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Ensure activeIndex never goes out of bound in either direction
  const clickLeftIndex = activeIndex > 0 ? activeIndex - 1 : items.length - 1
  const clickRightIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1

  return (
    <Container height={height} width={width}>
      <LeftArrow>
        <Control
          symbol='&#9664;'
          handler={() => setActiveIndex(clickLeftIndex)}
        ></Control>
      </LeftArrow>
      <RightArrow>
        <Control
          symbol='&#9654;'
          handler={() => setActiveIndex(clickRightIndex)}
        ></Control>
      </RightArrow>
      <CarouselImage
        src={items[activeIndex].src}
      >
      </CarouselImage>
    </Container>
  )
}
