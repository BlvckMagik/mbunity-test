import { Box as MUIBox } from '@mui/material';
import { styled } from '@mui/system';

export const Layout = styled(MUIBox)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
}));
