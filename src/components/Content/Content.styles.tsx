import { Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled('section')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '14px 5.56% 50px',
  gap: '10px',
}));

export const Title = styled(MUITypography)(({ theme }) => ({
  color: theme.palette.primary.main,

  [theme.breakpoints.down('md')]: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '36px',
  },
}));

export const Subtitle = styled(MUITypography)(({ theme }) => ({
  width: '65%',

  [theme.breakpoints.down('md')]: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '21px',
  },
}));
