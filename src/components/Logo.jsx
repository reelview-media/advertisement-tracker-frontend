import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ scrolled, useIn }) => {
  const footer = useIn === "footer";
  const loginPage = useIn === "login";
  const dashboard = useIn === "dashboard";
  return (
    <Typography
      component={Link}
      to='/'
      variant={loginPage ? "h4" : "h5"}
      className=" uppercase"
      sx={{
        color: scrolled
          ? "primary.main"
          : footer
          ? "#000"
          : loginPage
          ? "primary.main"
          : "#fff",
        fontWeight: dashboard?500:800,
        flexGrow:1
      }}
    >
      Reelview Media
    </Typography>
  );
};

export default Logo;
