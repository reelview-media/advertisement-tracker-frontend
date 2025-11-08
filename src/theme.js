import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light: "#404040",
      text: "#FFFFFF",
    },
    secondary: {
      main: "#ff00bb",
      light: "#FF6FD8",
      text: "#000000",
    },
    info: {
      main: "#005ccc",
      light: "#4C9EFF",
      text: "#000",
    },
    other: {
      main: "#5305c7",
      light: "#9D60FB",
      text: "#fff",
    },
    background: {
      default: "#000",
      custom: "linear-gradient(10deg, #FF6FD8 0%, #9D60FB 50%, #4C9EFF 100%)",
      custom2: "linear-gradient(10deg, #000 50%, #404040 100%)",
      paper: "rgba(255, 255, 255, 0.9)",
    },
    text: {
      main: "#000",
      light: "#404040",
      highlight: "#e6e600",
      text: "#d9d9d9",
    },
    hover: {
      default: "#ff00bb",
      main: "#005ccc",
      light: "#5305c7",
    },
    active: {
      main: "#0000FF",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Poppins', sans-serif" },
    h2: { fontFamily: "'Poppins', sans-serif" },
    h3: { fontFamily: "'Poppins', sans-serif" },
    h4: { fontFamily: "'Poppins', sans-serif" },
    h5: { fontFamily: "'Poppins', sans-serif" },
    h6: { fontFamily: "'Poppins', sans-serif" },
    body1: { fontFamily: "'Inter', sans-serif" },
    body2: { fontFamily: "'Inter', sans-serif" },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            "& fieldset": {
              borderColor: "#5305c7", // ✅ default border pink
            },
            "&:hover fieldset": {
              borderColor: "#ff00bb", // ✅ hover pink
            },
            "&.Mui-focused fieldset": {
              borderColor: "#005ccc", // ✅ focused pink
            },
            "& input::placeholder": {
              color: "#005ccc",
              fontSize: "0.9rem",
            },
          },

          // ✅ Label styling (default + focused)
          "& .MuiInputLabel-root": {
            color: "#5305c7", // default label white
            fontWeight: 500,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#005ccc", // label stays white when focused
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // borderRadius: '12px',
          backgroundColor: "#FFFBF5", // first color
        },
      },
    },
  },
});

export default theme;
