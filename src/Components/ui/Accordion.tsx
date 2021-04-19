
import React from 'react';
import AccordionItem from './AccordionItem';

export const Accordion: React.FC = () => {
  return (
    <div id="accordion" style={{ margin: '0 24px', padding: '80px 0' }}>
      {[1, 2, 3].map((item) => (
        <AccordionItem key={item} item={item} ></AccordionItem>
      ))}
    </div>
  )
}

export default Accordion;