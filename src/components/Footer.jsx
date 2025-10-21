import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import SocialMediaIcons from "./SocialMediaIcons ";
import { center, flexStart } from "../styles/flexStyles";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)")
  return (
    <Stack sx={{ pt: 5, bgcolor: "#ccc" }}>
      <Container>
        <Grid container rowSpacing={4} columnSpacing={2}>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Logo useIn='footer' />
            <Typography
              gutterBottom
              variant="body2"
              sx={{
                letterSpacing: 0.5,
                wordSpacing: 1,
                mt: 2,
                textAlign: "start",
                lineHeight: 1.7,
                color: "text.light",
              }}
            >
              We are a one-stop platform dedicated to connecting people with all
              types of essential services—quickly, reliably, and locally.
              Whether you're planning a wedding, seeking medical help, looking
              for legal support, or just need everyday services like a general
              store or electrician—we bring everything under one roof.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ p: 1 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "700", color: "text.main", textAlign: {xs:"start",sm:"center"} }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "start",
                alignItems: {xs:'start',sm:"center"},
                flexDirection: "column",
              }}
            >
              <MenuLinks useIn='footer' />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{}}></Grid>
        </Grid>
      </Container>
      <Divider color="#ccc" />
      <Container sx={{ p: 2 }}>
        <Grid container rowSpacing={4} columnSpacing={2} sx={{}}>
          <Grid
            size={{ xs: 12, sm: 6, md: 7 }}
            sx={{
             ...(isMobile?center:flexStart)
            }}
          >
            <SocialMediaIcons />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 5 }} sx={{ ...center }}>
            <Typography variant="title1" sx={{ color: "text.main",}}>
              © {new Date().getFullYear()} ReelView Media All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
