import palette from './palette';

const typography = {
  fontFamily: "'Poppins', 'Courier New', Courier, monospace",

  // Main title

  h1: {
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '60px',
  },

  // Banner title

  h2: {
    fontWeight: 600,
    fontSize: '28px',
    lineHeight: '42px',
    color: palette.secondary.main,
  },

  // Navigation

  h5: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
    color: palette.primary.dark,
  },

  // Form title

  h6: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: palette.primary.main,
  },

  // Banner typography

  body1: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: palette.secondary.main,
  },

  // Form typography

  body2: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    color: palette.primary.main,
  },

  // Main subtitle

  subtitle1: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '27px',
    color: palette.primary.light,
  },

  // Main subtitle

  subtitle2: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#C9C9C9',
  },
};

export default typography;
