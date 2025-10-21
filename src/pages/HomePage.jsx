import React from "react";
import HeroSection from "../components/HeroSection";
import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import CustomSlider from "../components/Swiper/CustomSlider";
import { center } from "../styles/flexStyles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WhyChooseUs from "../components/WhyChooseUs";
import { visionData } from "../data/visionData";
import VisionCard from "../components/Cards/VisionCard";

const HomePage = () => {
  const largeLaptop = useMediaQuery("(max-width:1215px)");
  const minLaptop = useMediaQuery("(max-width:850px)");
  const smallMobile = useMediaQuery("(max-width:400px)");
  return (
    <React.Fragment>
      <HeroSection />
      {/* TODO: Explore our services */}
      <Box component="section" sx={{ py: 5 }}>
        <Typography
          variant={smallMobile?"h5":"h4"}
          gutterBottom
          sx={{ textAlign: "center", fontWeight: 700, p:smallMobile?1:0 }}
        >
          Explore Our Services
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ textAlign: "center", color: "#404040", px:minLaptop?1:0 }}
        >
          We provide a wide rang of reliable and verified services for personal,
          professional and community needs.
        </Typography>
        <CustomSlider useIn="service" />
      </Box>

      {/* TODO: Add Services & Grow your */}
      <Stack
        sx={{
          // border:'2px solid red',
          width: "100%",
          height: 'auto',
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container rowGap={2} columnSpacing={3}>
            <Grid size={{ xs: 12, sm: 12, md: 7 }} sx={{...center,order:{xs:2,sm:2,md:1} }}>
              <Box sx={{width:'100%',pl:largeLaptop?0:20,}}>
                <Typography
                  gutterBottom
                  variant={smallMobile?"h5":minLaptop?"h3":"h2"}
                  sx={{ color: "secondary.contrastText", fontWeight: 700 }}
                >
                  Add Services & Grow your{" "}
                  <Typography
                    component="span"
                    variant={smallMobile?"h5":minLaptop?"h3":"h2"}
                    sx={{ color: "primary.main", fontWeight: 700 }}
                  >
                    business with us
                  </Typography>
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  sx={{ color: "text.light", width:largeLaptop?"100%": "80%" }}
                >
                  A versatile platform that connects you with local
                  professionals across various categories, from home services
                  like plumbing and electrical work to personal services like
                  photography and tutoring.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 ,mb:{sm:5,xs:5}}}
                  startIcon={<TrendingUpIcon />}
                >
                  Start Growing
                </Button>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 5 }}
              sx={{
                order:{xs:1,sm:1,md:2},
                maxHeight: 550,
              }}
            >
              <Box
                component="img"
                src="https://images.pexels.com/photos/2071216/pexels-photo-2071216.jpeg"
                sx={{ width: "100%", height: '100%',borderTopRightRadius:5,borderTopLeftRadius:5 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Stack>

      {/* TODO: Our vision */}

      <Stack
        sx={{
          
          background: "linear-gradient(135deg, #2b2b81 0%, #00e6e6 100%)",
          py: 10,
        }}
      >
        <Box sx={{px:1}}>
          <Typography
          gutterBottom
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "primary.contrastText",
          }}
        >
          Our Vision & Mission
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          sx={{ textAlign: "center", color: "primary.contrastText" }}
        >
          Transforming the way communities connect with essential services
          through innovation, trust, and accessibility
        </Typography>
        </Box>
        <Grid
          container
          sx={{ p:2, mt: 3 }}
          rowSpacing={2}
          columnSpacing={2}
        >
          {visionData.map((item,index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4,lg:3 }} key={index}>
              <VisionCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* TODO: Why Choose us.............. */}
      <WhyChooseUs />

      {/* TODO: Review ..... */}
      <Container maxWidth="xl" sx={{height:'auto', pb: 5,p:1}}>
        <Typography
        gutterBottom
          variant="h4"
          sx={{ color: "text.main", fontWeight: 700, textAlign: "center" }}
        >
          Genuine reviews from Customers
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.light", textAlign: "center" }}
        >
          Each listing is designed to be clear and concise, providing customers
        </Typography>
        <CustomSlider useIn="review" />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
