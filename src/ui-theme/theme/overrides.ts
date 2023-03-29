import palette from './palette';

const overrides = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 400,
        minWidth: '100px',
        borderRadius: '80px',

        '&:hover': {
          backgroundColor: palette.primary.light,
        },
        '&.Mui-disabled': {
          color: '#FFFFFFDE',
          backgroundColor: '#B4B4B4',
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'standard',
    },
    styleOverrides: {
      root: {
        width: '278px',
        height: '55px',
        color: palette.secondary.dark,
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '20px',

        '& .MuiFormLabel-root': {
          fontWeight: 500,
          lineHeight: '20px',
        },

        '& .MuiInputLabel-shrink': {
          color: '#000',
        },

        '& .MuiInput-input': {
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          paddingBottom: '10px',
        },

        '&.Mui-disabled': {
          color: '#FFFFFFDE',
          backgroundColor: '#B4B4B4',
        },
      },
      label: {
        '&.Mui-focused': {
          backgroundColor: '#000',
        },
      },
    },
  },
};

export default overrides;
