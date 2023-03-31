import React from 'react';
import { ReactComponent as PhoneIcon } from '../../image/PhoneIcon.svg';
import { ReactComponent as MailIcon } from '../../image/MailIcon.svg';
import { ReactComponent as GeoIcon } from '../../image/GeoIcon.svg';
import { footerData } from '../../mocked';

import {
  Container,
  LogoTypography,
  Content,
  ReachUsBlock,
  InfoGroup,
  Info,
  ReachUsTitle,
  Block,
  Item,
  Title,
  JoinBlock,
  JoinTitle,
  SubscribeBlock,
  TextField,
  Button,
  JoinSubtitle,
} from './Footer.styles';

const Footer = () => {
  return (
    <Container>
      <LogoTypography>Logo Here</LogoTypography>
      <Content>
        <ReachUsBlock>
          <ReachUsTitle align='left'>Reach us</ReachUsTitle>
          <InfoGroup>
            <PhoneIcon />
            <Info variant='body1'>+1012 3456 789</Info>
          </InfoGroup>
          <InfoGroup>
            <MailIcon />
            <Info variant='body1'>demo@gmail.com</Info>
          </InfoGroup>
          <InfoGroup>
            <GeoIcon />
            <Info variant='body1'>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </Info>
          </InfoGroup>
        </ReachUsBlock>
        {footerData.map(block => (
          <Block key={block.title}>
            <Title>{block.title}</Title>
            {block.items.map(el => (
              <Item key={el}>{el}</Item>
            ))}
          </Block>
        ))}
      </Content>
      <JoinBlock>
        <JoinTitle align='left'>Join Our Newsletter</JoinTitle>
        <SubscribeBlock>
          <TextField placeholder='Your email address' variant='outlined' />
          <Button>Subscribe</Button>
        </SubscribeBlock>
        <JoinSubtitle align='left'>
          * Will send you weekly updates for your better tool management.
        </JoinSubtitle>
      </JoinBlock>
    </Container>
  );
};

export default Footer;
