import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2b2b81', 
      light: '#00e6e6', 
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#fff', 
      light:'#f7efe5',
      contrastText: '#000000',
    },
    other:{
      main:'#00cc00',
    },
    background: {
      default: '#fff', 
      paper: '#2b2b81',
    },
    text:{
      main:'#000',
      light:'#404040',
      highlight:'#00e6e6'

    },
    hover: {
      main: '#f3b229', 
    },
    active: {
      main: '#0000FF', 
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Poppins', sans-serif",},
    h2: { fontFamily: "'Poppins', sans-serif" },
    h3: { fontFamily: "'Poppins', sans-serif" },
    h4: { fontFamily: "'Poppins', sans-serif" },
    h5: { fontFamily: "'Poppins', sans-serif" },
    h6: { fontFamily: "'Poppins', sans-serif" },
    body1: { fontFamily: "'Inter', sans-serif" },
    body2: { fontFamily: "'Inter', sans-serif" },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: '8px',
    //       bgco
    //       textTransform: 'none',
    //       fontWeight: 600,
    //       '&:hover': {
    //         backgroundColor: '#3ac379', // hover red
    //       },
    //       '&:active': {
    //         backgroundColor: '#3ac379', // active blue
    //       },
    //     },
    //   },
    // },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '&:hover fieldset': {
              borderColor: '#c3863c', // hover red
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7743DB', // primary focus
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // borderRadius: '12px',
          backgroundColor: '#FFFBF5', // first color
        },
      },
    },
  },
});

export default theme;
