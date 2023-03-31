import React from 'react';
import { TextField, FormControlLabel } from '@mui/material';
import { radioData } from '../../mocked';
import { ReactComponent as PhoneIcon } from '../../image/PhoneIcon.svg';
import { ReactComponent as MailIcon } from '../../image/MailIcon.svg';
import { ReactComponent as GeoIcon } from '../../image/GeoIcon.svg';
import { ReactComponent as TwitterIcon } from '../../image/TwitterIcon.svg';
import { ReactComponent as InstIcon } from '../../image/InstIcon.svg';
import { ReactComponent as DiscordIcon } from '../../image/DiscordIcon.svg';
import { ReactComponent as TickIcon } from '../../image/TickIcon.svg';
import PlaneImg from '../../image/Plane.png';

import {
  Container,
  ContactInfoBlock,
  InfoBlockTitle,
  InfoBlockSubtitle,
  InfoGroup,
  Info,
  Socials,
  Social,
  Elips1,
  Elips2,
  Form,
  Button,
  Plane,
  RadioGroup,
  GreyCircle,
  InputsBlock,
  SubjectBlock,
  SubjectTitle,
  MessageTextField,
} from './FormBlock.styles';

const FormBlock = () => {
  const [value, setValue] = React.useState<string>('1');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <Container>
      <ContactInfoBlock>
        <InfoBlockTitle variant='h2'>Contact Information</InfoBlockTitle>
        <InfoBlockSubtitle>
          Say something to start a live chat!
        </InfoBlockSubtitle>
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

        <Socials>
          <Social>
            <TwitterIcon
              style={{
                margin: '9px 0',
              }}
            />
          </Social>
          <Social>
            <InstIcon
              style={{
                margin: '7px 0',
              }}
            />
          </Social>
          <Social>
            <DiscordIcon
              style={{
                margin: '10px 0',
              }}
            />
          </Social>
        </Socials>
        <Elips1 />
        <Elips2 />
      </ContactInfoBlock>
      <Form>
        <InputsBlock>
          <TextField label='First Name' />
          <TextField label='Last Name' />
          <TextField label='Email' />
          <TextField label='Phone Number' />
        </InputsBlock>
        <SubjectTitle align='left' variant='h6'>
          Select Subject?
        </SubjectTitle>
        <SubjectBlock>
          <RadioGroup>
            {radioData.map(el => (
              <FormControlLabel
                key={el}
                value={el}
                control={value === el ? <TickIcon /> : <GreyCircle />}
                label='General Inquiry'
                onClick={() => handleChange(el)}
              />
            ))}
          </RadioGroup>
        </SubjectBlock>

        <MessageTextField label='Message' placeholder='Write your message..' />
        <Button>Send Message</Button>
        <Plane alt='planeIcon' src={PlaneImg} />
      </Form>
    </Container>
  );
};

export default FormBlock;
