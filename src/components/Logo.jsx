import { Typography } from "@mui/material";
import React from "react";

const Logo = ({ scrolled,useIn }) => {
  const footer = useIn === 'footer';
  const loginPage = useIn === 'login';
  return (
    <Typography
      variant={loginPage?"h4":"h5"}
      className=" uppercase"
      sx={{ color: scrolled ? "primary.main" :footer?"#000":loginPage?"primary.main": "#fff", fontWeight: 800 }}
    >
      Reelview Media
    </Typography>
  );
};

export default Logo;
