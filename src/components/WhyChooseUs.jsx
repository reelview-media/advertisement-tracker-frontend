import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Container,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { serviceFeatures } from "../data/whyChooseUsData";
import { center } from "../styles/flexStyles";

const WhyChooseUs = () => {
  const [expanded, setExpanded] = useState(serviceFeatures[0].id); 
  const isTablet = useMediaQuery("(max-width:650px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); 
  };
  return (
    <Stack
      sx={{
        //  border: "2px solid red",
        height: "auto",
        width: "100%",
        overflow: "hidden",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container rowSpacing={2} columnSpacing={3} sx={{ ...center }}>
          <Grid size={{ xs: 12, sm: 12, md: 8 }} sx={{}}>
          <Typography gutterBottom variant="body1" sx={{fontWeight:700, color: "primary.main" }}>
              Your Trusted Partner for Every Service Need
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ fontWeight: 700, textAlign: "start",textTransform:'uppercase' }}
            >
              Why Choose Us?
            </Typography>
            
            <Typography
              variant="body1"
              sx={{ color: "text.light", width: isTablet?"100%":"70%",}}
            >
              In a world full of options, finding reliable and quality services
              shouldn't be a hassle. That's where we come in. We've built a
              platform that puts trust, convenience, and quality at the
              forefront of everything we do.
            </Typography>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: 5,
                mt:3
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            {serviceFeatures.map((feature) => (
              <Accordion
                key={feature.id}
                expanded={expanded === feature.id}
                onChange={handleChange(feature.id)}
                sx={{ mb: 1, color:'primary.contrastText',bgcolor:'primary.main' }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "primary.contrastText" }} />}
                >
                  <Typography variant="body2" sx={{  mb: 1 }}>
                    {feature.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption">{feature.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default WhyChooseUs;
