import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../components/Logo";
import { center } from "../styles/flexStyles";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import loginImg from "../assets/login.png";

const LoginPage = () => {
  return (
    <Stack sx={{ height: "auto" }}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ p: 3 }}>
          <Logo useIn="login" />
          <Card
            sx={{ bgcolor: "transparent", boxShadow: "none", mt: 5, p: 10 }}
          >
            <CardContent>
              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom variant="h4" sx={{ fontWeight: 800 }}>
                  Login
                </Typography>
                <Typography
                  gutterBottom
                  variant="title1"
                  sx={{ color: "text.light" }}
                >
                  Access your account to manage your profile, projects, and
                  settings securely.
                </Typography>
              </Box>
              {/* <GoogleButton /> */}
              <Box sx={{ ...center, my: 4 }}>
                <Divider sx={{ borderColor: "#999999", width: "30%" }} />
                <Typography variant="body2" sx={{ color: "text.light", mx: 1 }}>
                  Sign in with phone number
                </Typography>
                <Divider sx={{ borderColor: "#999999", width: "30%" }} />
              </Box>
              <TextField
                size="medium"
                fullWidth
                id="phone"
                type="tel"
                label="Phone Number"
                placeholder="Enter Phone Number"
              />
            </CardContent>
            <CardActions sx={{ ...center, mb: 5 }}>
              <Button
                endIcon={<LoginIcon />}
                type="submit"
                size="large"
                variant="contained"
              >
                Login
              </Button>
            </CardActions>
            <Typography sx={{}} variant="body2">
              Not Registered yet?{" "}
              <Typography variant="body2" component={Link} to="/register">
                Create an Account
              </Typography>
            </Typography>
          </Card>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            height: "100vh",
            bgcolor: "primary.main",
            p: 3,
            ...center,
            flexDirection: "column",
            backgroundImage: `url(${loginImg})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            sx={{ fontWeight: 800, color: "primary.contrastText" }}
          >
            Welcome back!
          </Typography>
          <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
            Let’s get you signed in and ready to continue your journey.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default LoginPage;
