import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { achievementData } from "../data/aboutAchievementData";
import { center } from "../styles/flexStyles";

const AboutSection = () => {
  const isTablet = useMediaQuery("(max-width:850px)");

  const isMobile = useMediaQuery("(max-width:500px)");
  const smallMobile = useMediaQuery("(max-width:450px)");
  

  return (
    <Container sx={{ mt: 8, mb: 10, ...center, flexDirection: "column" }}>
      <Box sx={{ p: 1, ...center, flexDirection: "column" }}>
        <Typography
          
          variant={isMobile?"h4":"h3"}
          sx={{ fontWeight: 700, textAlign: "center" }}
        >
          About Us
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: isTablet ? "100%" : "80%",
            textAlign: "center",
            mb: 5,
          }}
        >
          We are dedicated to connecting people with reliable local services
          that simplify everyday life. 
        </Typography>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={4}>
        <Grid
          size={{ xs: 12, sm: 12, md: 7 }}
          sx={{ boxShadow: "0px 0px 5px black", p:smallMobile?2: 5, borderRadius: 2 }}
        >
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              fontWeight: 200,
              textTransform: "capitalize",
              color: "primary.main",
            }}
          >
            How it started
          </Typography>
          <Typography
            variant={smallMobile?"h4":isTablet?"h3": "h2"}
            sx={{
              mt: 2.5,
              fontWeight: 700,
              textTransform: "capitalize",
              color: "text.main",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Your Trusted Partner{" "}
            <Typography
              component="span"
            variant={smallMobile?"h4":isTablet?"h3": "h2"}
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              {" "}
              for Every Service Need
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.light", mt: 5 }}>
            We are a comprehensive service provider dedicated to simplifying
            your life by offering solutions across multiple domains under one
            roof. From healthcare facilities to hospitality, technology support
            to legal services, we've built a diverse portfolio designed to meet
            the everyday needs of individuals and businesses alike.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 3, color: "text.light", fontWeight: 500 }}
          >
            Our mission is simple: to be the single point of contact for all
            your service requirements, delivering quality, reliability, and
            convenience in everything we do
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src="https://images.pexels.com/photos/7682351/pexels-photo-7682351.jpeg"
              sx={{
                width: "100%",
                height: 300,
                borderRadius: 5,
                objectFit: "cover",
                objectPosition: "0px 30%",
              }}
            />
            <Grid container columnSpacing={2} rowSpacing={1} sx={{ mt: 3 }}>
              {achievementData.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <Card
                    key={item.id}
                    sx={{
                      bgcolor: "primary.light",
                      cursor: "pointer",
                      transition: "all 0.9s ease-in-out",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        {item.number}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 700,
                          textTransform: "uppercase",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
