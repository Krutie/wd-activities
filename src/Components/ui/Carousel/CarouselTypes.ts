// TYPES

export interface ContainerProps {
  width: number;
  height: number;
}

export interface CarouselImageProps {
  src: string;
}

export interface CarouselProps {
  width: number;
  height: number;
  items: CarouselImageProps[];
}

export interface ControlProps {
  symbol: string;
  handler: (e: React.MouseEvent<HTMLDivElement>) => void;
}