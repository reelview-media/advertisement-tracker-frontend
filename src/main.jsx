import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App.jsx";
import theme from "./theme.js";
import "./index.css"; // import tailwaind css..
import "./fonts/fonts.js"; // import fonts..........

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
