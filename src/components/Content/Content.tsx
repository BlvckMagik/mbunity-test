import React from 'react';
import FormBlock from '../FormBlock';

import { Container, Title, Subtitle } from './Content.styles';

const Content = () => {
  return (
    <Container>
      <Title variant='h1'>Contact Us</Title>
      <Subtitle variant='subtitle1'>
        Any question or remarks? Just write us a message!
      </Subtitle>
      <FormBlock />
    </Container>
  );
};

export default Content;
