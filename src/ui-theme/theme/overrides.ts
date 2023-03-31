import palette from './palette';

const overrides = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        minWidth: '100px',
        borderRadius: '4px',
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '19px',
        textAlign: 'center',

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
        zIndex: 4,
        width: '278px',
        height: '55px',
        color: palette.secondary.dark,
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '20px',

        '& .MuiFormLabel-root': {
          color: palette.secondary.dark,
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

  MuiRadio: {
    styleOverrides: {
      root: {
        backgroundColor: 'blue',
      },
    },
  },

  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        ' span': {
          color: palette.primary.main,
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '20px',
          marginLeft: '10px',
        },
      },
    },
  },
};

export default overrides;
