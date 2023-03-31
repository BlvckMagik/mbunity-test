import {
  Box as MUIBox,
  Button as MUIButton,
  TextField as MUITextField,
  Typography as MUITypography,
} from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled('footer')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main,
  padding: '19px 20px 35px 20px',

  [theme.breakpoints.up('md')]: {
    position: 'relative',
    padding: '80px 80px 66px 80px',
  },
}));

export const LogoTypography = styled(MUITypography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '36px',
  lineHeight: '44px',
  marginBottom: '20px',

  [theme.breakpoints.up('md')]: {
    marginBottom: '45px',
  },
}));

export const Content = styled(MUIBox)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.secondary.main}`,
  paddingTop: '30px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'space-between',

  [theme.breakpoints.up('md')]: {
    position: 'relative',
    padding: '30px 0 0 20px',
    paddingRight: '30%',
  },
}));

export const ReachUsBlock = styled(MUIBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '50%',

  [theme.breakpoints.up('md')]: {
    alignItems: 'start',
    width: 'auto',
  },
}));

export const ReachUsTitle = styled(MUITypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '26px',
}));

export const InfoGroup = styled(MUIBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  justifyContent: 'center',
  alignItems: 'left',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    margin: 0,
    marginBottom: '24px',

    ' svg': {
      marginRight: '25px',
    },

    ' p': {
      width: '288px',
      textAlign: 'left',
    },
  },
}));

export const Info = styled(MUITypography)(({ theme }) => ({
  textAlign: 'left',

  [theme.breakpoints.down('md')]: {
    width: '80%',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '18px',
  },
}));

export const Block = styled(MUIBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

export const Item = styled(MUITypography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  textAlign: 'left',
}));

export const Title = styled(MUITypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '26px',
  textAlign: 'left',
}));

export const JoinBlock = styled(MUIBox)(({ theme }) => ({
  width: '320px',
  backgroundColor: '#0D0D0D',
  borderRadius: '5px',
  margin: 'auto',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  padding: '17px 0 14px 14px',

  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    right: '80px',
    top: '155px',
  },
}));

export const JoinTitle = styled(MUITypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '26px',
  marginBottom: '23px',
}));

export const SubscribeBlock = styled(MUIBox)(({ theme }) => ({
  width: '277px',
  height: '39px',
  display: 'flex',
  marginBottom: '20px',
}));

export const TextField = styled(MUITextField)(({ theme }) => ({
  width: '172px',
  height: '39px',

  '& .MuiInputBase-root': {
    fontWeight: 400,
    fontSize: '11px',
    lineHeight: '16px',
    color: '#616161',
    height: '39px',
    backgroundColor: '#191919',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
  },
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  width: '105px',
  height: '39px',
  borderTopLeftRadius: '0',
  borderBottomLeftRadius: '0',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '18px',
}));

export const JoinSubtitle = styled(MUITypography)(({ theme }) => ({
  fontSize: '13px',
  lineHeight: '18px',
  color: theme.palette.secondary.main,
  opacity: '0.5',
  width: '85%',
}));
