import Container from "@mui/material/Container";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import AboutSection from "../components/AboutSection";
import CustomSlider from "../components/Swiper/CustomSlider";
import { center } from "../styles/flexStyles";

const AboutPage = () => {
  const isTablet = useMediaQuery("(max-width:850px)");
  const smallMobile = useMediaQuery("(max-width:450px)");

  return (
    <Box sx={{}}>
      <AboutSection />
      <Box
        sx={{
          width:'100%',
          ...center,
          flexDirection: "column",
          py: 10,
          background: "linear-gradient(135deg, #2b2b81 0%, #00e6e6 100%)",
        }}
      >
        <Typography
          
          variant={smallMobile?"h4":"h3"}
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "primary.contrastText",
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: isTablet ? "100%" : "50%",
            padding:isTablet?1:0,
            textAlign: "center",
            color: "primary.contrastText",
          }}
        >Our mission is to make access to trusted
          professionals easier, faster, and more transparent for everyone.
        </Typography>
        <CustomSlider useIn="aboutService" />
      </Box>
      
    </Box>
  );
};

export default AboutPage;
