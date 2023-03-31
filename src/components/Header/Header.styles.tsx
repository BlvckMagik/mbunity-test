import { Box as MUIBox, Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(MUIBox)(({ theme }) => ({
  width: '100%',
  height: '81px',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  transition: 'all .3s ease-in',
  filter: 'drop-shadow(0px -2px 4px rgba(0, 0, 0, 0.1))',
  position: 'sticky',
  top: 0,
  zIndex: 5,

  [theme.breakpoints.up('md')]: {
    position: 'static',
    height: '110px',
    padding: '0 100px',
    filter: 'none',
  },

  [theme.breakpoints.up('sm')]: {
    padding: '0 50px',
  },
}));

export const LogoTypography = styled(MUITypography, {
  shouldForwardProp: prop => prop !== 'isMenuOpen',
  // @ts-ignore
})(({ theme, isMenuOpen }) => ({
  fontWeight: 800,
  fontSize: '24px',
  lineHeight: '29px',
  zIndex: 3,
  color: isMenuOpen ? theme.palette.secondary.main : theme.palette.primary.main,
  transition: 'all .4s ease-in',

  [theme.breakpoints.up('md')]: {
    color: theme.palette.primary.main,
  },
}));

export const NavItems = styled(MUIBox, {
  shouldForwardProp: prop => prop !== 'isMenuOpen',
  // @ts-ignore
})(({ theme, isMenuOpen }) => ({
  display: 'flex',
  opacity: `${isMenuOpen ? 1 : 0}`,
  zIndex: `${isMenuOpen ? 1 : -2}`,
  visibility: `${isMenuOpen ? 'visible' : 'hidden'}`,
  position: 'absolute',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  top: '0',
  left: '0',
  width: '100%',
  gap: '30px',
  backgroundColor: theme.palette.primary.main,
  padding: '110px 23px 30px 23px',

  transition: '.4s ease-in',
  transitionProperty: 'opacity, z-index, padding, visibility',

  '& .MuiTypography-root': {
    color: theme.palette.secondary.main,
    textAlign: 'left',
  },

  '& > .MuiTypography-root': {
    width: '100%',
  },

  '& svg': {
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.up('sm')]: {
    padding: '110px 50px 30px 50px',
  },

  [theme.breakpoints.up('md')]: {
    position: 'static',
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '47px',
    padding: 0,
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    zIndex: 3,
    opacity: 1,
    visibility: 'visible',

    '& .MuiTypography-root': {
      color: theme.palette.primary.dark,
    },

    '& svg': {
      color: theme.palette.primary.dark,
    },
  },
}));

export const NavItemWithIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: '100%',

  '& .MuiTypography-root': {
    width: 'auto',
  },

  '& svg': {
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.up('md')]: {
    '& svg': {
      color: theme.palette.primary.dark,
    },
  },
}));

export const IconContainer = styled(MUIBox)(({ theme }) => ({
  width: '31px',
  height: '31px',
  borderRadius: '15.5px',
  border: '1px solid #fff',
  padding: '6px',

  '& svg': {
    filter: 'invert(1)',
  },

  [theme.breakpoints.up('md')]: {
    border: '1px solid #000000',

    '& svg': {
      filter: 'none',
    },
  },
}));

export const IconsBlock = styled(MUIBox)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '13px',
  gap: '36px',
}));

export const MenuButton = styled('div')(({ theme }) => ({
  display: 'block',
  width: '24px',
  height: '24px',
  padding: '3px',
  zIndex: 3,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
