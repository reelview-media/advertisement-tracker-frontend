import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { center } from "../styles/flexStyles";
import HeroVideo from "./HeroVideo";

const HeroSection = () => {
  //TODO: Add for responsive.............
  const minLaptop = useMediaQuery("(max-width:950px)");
  const isTablet = useMediaQuery("(max-width:725px)");
  const ismobile = useMediaQuery("(max-width:520px)");
  const smallmobile = useMediaQuery("(max-width:415px)");

  return (
    <Stack
      component="section"
      sx={{
        height: "auto",
        pb: 10,
        bgcolor: "primary.main",
        ...center,
      }}
    >
      <Container sx={{ mt: 10, ...center, flexDirection: "column" }}>
        <Typography
        gutterBottom
          variant="h1"
          sx={{
            fontSize: smallmobile?"2rem":ismobile?"3rem":isTablet?"4rem":minLaptop?"5.5rem":"6rem",
            textAlign: ismobile?"start":"center",
            fontWeight: 900,
            color: "secondary.main",
          }}
        >
          Making Your Life{" "}
          <Typography
            variant="h1"
            component="span"
            sx={{
              color: "text.highlight",
              fontSize: smallmobile?"2rem":ismobile?"3rem":isTablet?"4rem":minLaptop?"5.5rem":"6rem",
              fontWeight: 900,
              lineHeight: 1.4,
            }}
          >
            Easier with Every Service.
          </Typography>
        </Typography>
        <Typography
          gutterBottom
          sx={{
            width: isTablet?"100%":minLaptop?"90%":"75%",
            mt: 1,
            textAlign: ismobile?"start":"center",
            color: "secondary.light",
            fontSize: ismobile?"1rem":"1.3rem",
            fontWeight: 100,
            letterSpacing: 0.5,
            wordSpacing: 0.7,
          }}
        >
          Connect with essential services like hotels, hospitals, and community
          halls—all in one place. Making access simple, fast, and reliable.
        </Typography>
      </Container>
      <HeroVideo />
    </Stack>
  );
};

export default HeroSection;
