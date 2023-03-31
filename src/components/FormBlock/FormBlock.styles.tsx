import {
  Box as MUIBox,
  Button as MUIButton,
  TextField as MUITextField,
  Typography as MUITypography,
  RadioGroup as MUIRadioGroup,
} from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(MUIBox)(({ theme }) => ({
  background: theme.palette.secondary.main,
  boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)',
  borderRadius: '5px',
  padding: '5px',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',

  [theme.breakpoints.up('md')]: {
    padding: '10px',
    flexDirection: 'row',
    marginTop: '40px',
    borderRadius: '10px',
    maxWidth: '1216px',
  },
}));

export const ContactInfoBlock = styled(MUIBox)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '5px',
  padding: '15px 0 25px 0',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.up('md')]: {
    padding: '40px 0 36px 40px',
    alignItems: 'flex-start',
    borderRadius: '10px',
    width: '491px',
    flexShrink: '0',
  },
}));

export const InfoBlockTitle = styled(MUITypography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '30px',
  },

  [theme.breakpoints.up('md')]: {
    marginBottom: '6px',
  },
}));

export const InfoBlockSubtitle = styled(MUITypography)(({ theme }) => ({
  color: '#C9C9C9',
  fontWeight: 400,
  fontSize: '11px',
  lineHeight: '16px',

  [theme.breakpoints.up('md')]: {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    marginBottom: '111px',
  },
}));

export const InfoGroup = styled(MUIBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '15px',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    margin: 0,
    marginBottom: '50px',

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
  [theme.breakpoints.down('md')]: {
    width: '80%',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '18px',
  },
}));

export const Socials = styled(MUIBox)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '24px',
  margin: 'auto',
  marginTop: '58px',

  [theme.breakpoints.up('md')]: {
    width: '138px',
    margin: '159px 0 0 0',
  },
}));

export const Social = styled('div')(({ theme }) => ({
  width: '30px',
  height: '30px',
  borderRadius: '15px',
  backgroundColor: '#262626',
  cursor: 'pointer',
  transition: 'all .3s',

  ':hover': {
    backgroundColor: theme.palette.secondary.main,

    ' svg': {
      filter: 'invert(1)',
      width: '100%',
      lineHeight: '30px',
    },
  },
}));

export const Elips1 = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '54px',
  height: '54px',
  right: '26px',
  bottom: '52px',
  background: 'rgba(72, 72, 72, 0.5)',
  borderRadius: '27px',

  [theme.breakpoints.up('md')]: {
    width: '138px',
    height: '138px',
    borderRadius: '69px',
    right: '70px',
    bottom: '71px',
  },
}));

export const Elips2 = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '192px',
  height: '192px',
  right: '-120px',
  bottom: '-92px',
  background: 'rgba(72, 72, 72, 0.5)',
  borderRadius: '96px',

  [theme.breakpoints.up('md')]: {
    width: '269px',
    height: '269px',
    borderRadius: '134.5px',
    right: '-81px',
    bottom: '-97px',
  },
}));

export const Form = styled('form')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 16px',
  marginTop: '30px',
  gap: '20px',

  [theme.breakpoints.up('md')]: {
    padding: '60px 50px 0 50px',
    margin: 0,
  },
}));

export const InputsBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  [theme.breakpoints.up('md')]: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '39px',
    justifyContent: 'center',
    '& .MuiFormControl-root': {
      width: '100%',
    },
  },

  [theme.breakpoints.up('lg')]: {
    '& .MuiFormControl-root': {
      width: '278px',
    },
  },
}));

export const SubjectBlock = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '39px',
    justifyContent: 'center',
    width: '100%',
  },
}));

export const SubjectTitle = styled(MUITypography)(({ theme }) => ({
  width: '100%',
  maxWidth: '278px',

  [theme.breakpoints.up('md')]: {
    maxWidth: 'none',
    marginTop: '25px',
  },
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  width: '100%',
  maxWidth: '278px',
  height: '38px',
  marginBottom: '64px',

  [theme.breakpoints.up('md')]: {
    width: '214px',
    height: '54px',
    borderRadius: '5px',
    alignSelf: 'flex-end',
  },
}));

export const Plane = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: '-10px',
  left: 'calc(50% - 100px)',
  objectFit: 'cover',
  width: '120px',
  height: '70px',

  [theme.breakpoints.up('md')]: {
    width: '135px',
    height: '78px',

    right: '133.35px',
    left: 'initial',
  },

  [theme.breakpoints.up('lg')]: {
    width: '300px',
    height: '150px',
  },
}));

export const RadioGroup = styled(MUIRadioGroup)(({ theme }) => ({
  display: 'flex',
  maxWidth: '395px',
  marginLeft: '14px',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',

  [theme.breakpoints.up('md')]: {
    width: '100%',
    maxWidth: 'none',
    justifyContent: 'left',
    marginBottom: '25px',
  },
}));

export const GreyCircle = styled('div')(({ theme }) => ({
  backgroundColor: '#E0E0E0',
  width: '13px',
  height: '13px',
  borderRadius: '6.5px',
}));

export const MessageTextField = styled(MUITextField)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '100%',
  },
}));
