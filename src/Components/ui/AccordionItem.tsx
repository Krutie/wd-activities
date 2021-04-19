
import React, { useState } from 'react';
import styled from 'styled-components';

// Interfaces

interface Props {
  item: number;
}

interface ToggleProps {
  show: boolean;
}

interface TextProps {
  light: boolean;
}

// Styled Components 

const ToggleArrow = styled.div<ToggleProps>`
  cursor: pointer;
  font-size: 3rem;
  transform: ${props => (props.show ? "rotate(180deg)" : "rotate(0deg)")};
`;

const Toggle = styled.div<ToggleProps>`
  display: ${props => (props.show ? "block" : "none")};
`;

const AccordionPanel = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid gray;
  &:last-child {
        border: none;
    }
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const AccordionText = styled.div<TextProps>`
  color: ${props => (props.light ? "gray" : "black")};
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
`;
// AccordionItem Component

export const AccordionItem: React.FC<Props> = ({ item }) => {
  const [Active, setActiveState] = useState(false);

  return (
    <AccordionPanel>
      <AccordionHeader onClick={() => setActiveState(!Active)}>
        Group #{item}
        <ToggleArrow show={Active}>
          &#710;
        </ToggleArrow>
      </AccordionHeader>
      <AccordionText light>Short description about this group</AccordionText>
      <Toggle show={Active}>
        <AccordionText light={false}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus massa nec dui pretium, vel vehicula lectus rutrum. Praesent id cursus felis, et congue risus. Etiam lobortis mauris quis purus iaculis accumsan. In congue efficitur ex. Vestibulum tempor velit at nulla dictum posuere. Nam eu nulla nec nunc feugiat cursus a quis justo. Praesent sagittis, sem id pharetra tempor, magna nunc sagittis eros, ut pretium nibh elit a lacus. Mauris placerat est vel massa sagittis tempus.</AccordionText>
      </Toggle>
    </AccordionPanel>
  )
}

export default AccordionItem;