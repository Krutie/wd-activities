import gsap from "gsap";

export const slide = (el: HTMLElement, direction: string) => {
  const left = direction === 'left' ? '5%' : '-5%';
  
  gsap.fromTo(
    el,
    {
      left: left,
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