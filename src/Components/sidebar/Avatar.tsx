import styled from 'styled-components';

interface AvatarProps {
  image: string;
}

export default styled.div<AvatarProps>`
font-family: ${props => props.theme.font};
  background-image: url(${props => props.image});
  width: 180px;
  height: 180px;
  border-radius: 99em;
  margin-top: 80px;
  margin-bottom: 16px;
`;