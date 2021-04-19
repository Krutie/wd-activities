import React from 'react';
import styled from 'styled-components';

// Sidebar Components
import ProfileWrapper from '../Components/ProfileWrapper';
import SideBar from '../Components/sidebar/SideBar';
import Avatar from '../Components/sidebar/Avatar';

// Content Components
import Content from '../Components/content/Content';
import Spacer from '../Components/content/Spacer';
import Accordion from '../Components/ui/Accordion';

interface ProfileTextProps {
  fontSize?: number;
  lineHeight?: number;
  textColor?: string;
}
const ProfileText = styled.div<ProfileTextProps>`
  font-size: ${props => (props.fontSize ? props.fontSize + "px" : "12px")};
  line-height: ${props => (props.lineHeight ? props.lineHeight + "px" : "14px")};
  color: ${props => (props.textColor ? props.textColor : "black")};
`;

const ContactInfo = styled.div`
  padding-top: 32px;
  text-align: center;
`;

export const Profile: React.FC = () => {
  return <ProfileWrapper>
    <SideBar>
      <Avatar image="https://dummyimage.com/400x400/c4c4c4/fff"></Avatar>

      <ProfileText fontSize={18} lineHeight={21} > Full Name </ProfileText>
      <ProfileText fontSize={14} lineHeight={16} > Job Description </ProfileText>
      <ContactInfo>
        <ProfileText textColor={'rgba(0, 0, 0, 0.6)'}> Contact Info </ProfileText>
        <ProfileText> email@example.com </ProfileText>
        <ProfileText> 0400 000 000 </ProfileText>
      </ContactInfo>
    </SideBar>
    <Content>
      <Accordion></Accordion>
      <Spacer></Spacer>
    </Content>
  </ProfileWrapper>
};

// export default App;
