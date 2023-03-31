import React, { useState } from 'react';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as CartIcon } from '../../image/CartIcon.svg';
import { ReactComponent as AvatarIcon } from '../../image/AvatarIcon.svg';
import { ReactComponent as MenuIcon } from '../../image/MenuIcon.svg';

import {
  Container,
  LogoTypography,
  NavItems,
  IconContainer,
  IconsBlock,
  NavItemWithIcon,
  MenuButton,
} from './Header.styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Container>
      {/* @ts-ignore */}
      <LogoTypography isMenuOpen={isMenuOpen}>Logo Here</LogoTypography>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CloseIcon color='secondary' /> : <MenuIcon />}
      </MenuButton>
      {/* @ts-ignore */}
      <NavItems isMenuOpen={isMenuOpen}>
        <Typography variant='h5'>Home</Typography>
        <NavItemWithIcon>
          <Typography variant='h5'>Features</Typography>
          <KeyboardArrowDownIcon />
        </NavItemWithIcon>
        <Typography variant='h5'>Blog</Typography>
        <Typography variant='h5'>Shop</Typography>
        <Typography variant='h5'>About</Typography>
        <Typography variant='h5' sx={{ fontWeight: 600 }}>
          Contact
        </Typography>
        <IconsBlock>
          <IconContainer>
            <AvatarIcon />
          </IconContainer>
          <IconContainer>
            <CartIcon />
          </IconContainer>
        </IconsBlock>
      </NavItems>
    </Container>
  );
};

export default Header;
