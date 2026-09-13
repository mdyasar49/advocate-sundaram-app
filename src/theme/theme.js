import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#080d1a',
      paper: 'rgba(15, 23, 42, 0.85)',
    },
    primary: {
      main: '#d4af37',
      light: '#f3e5ab',
      dark: '#996515',
      contrastText: '#080d1a',
    },
    secondary: {
      main: '#25D366',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Mukta Malar", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Cinzel", "Mukta Malar", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Cinzel", "Mukta Malar", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Cinzel", "Mukta Malar", serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Cinzel", "Mukta Malar", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Cinzel", "Mukta Malar", serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Cinzel", "Mukta Malar", serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#080d1a',
          color: '#f8fafc',
          backgroundImage: `
            radial-gradient(circle at 10% 10%, rgba(212, 175, 55, 0.05) 0%, transparent 45%),
            radial-gradient(circle at 90% 80%, rgba(30, 58, 138, 0.15) 0%, transparent 50%)
          `,
          backgroundAttachment: 'fixed',
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: 20,
          backdropFilter: 'blur(16px)',
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: 20,
          backdropFilter: 'blur(16px)',
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          fontWeight: 700,
          padding: '12px 28px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: 'rgba(8, 13, 26, 0.85)',
          '& fieldset': {
            borderColor: 'rgba(212, 175, 55, 0.3)',
          },
          '&:hover fieldset': {
            borderColor: '#d4af37',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#d4af37',
            boxShadow: '0 0 12px rgba(212, 175, 55, 0.25)',
          },
        },
      },
    },
  },
});

export default theme;
