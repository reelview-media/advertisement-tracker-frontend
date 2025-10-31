import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "../components/Logo";
import { center } from "../styles/flexStyles";
import authBg from "../assets/authbg.png";
import GoogleButton from "../components/GoogleButton";
import AuthForm from "../components/AuthForm";
import { useLocation, useNavigate } from "react-router-dom";
import { authPageData } from "../data/authData";
import { useState } from "react";
import { handleLoginSubmit, handleRegisterSubmit } from "../utils/authHandler";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const loginPage = location.pathname === "/login";
  const currentAuthPageData = authPageData.find((item) =>
    loginPage ? item.id === "login" : item.id === "register"
  );
  const {
    heading,
    description,
    buttonLabel,
    icon,
    bottomText,
    rightHeading,
    rightSubtext,
  } = currentAuthPageData;

  return (
    <Stack sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ p: 3 }}>
          <Logo useIn="login" />
          <Card
            component="form"
            onSubmit={(e) =>
              loginPage
                ? handleLoginSubmit(e, formData, navigate)
                : handleRegisterSubmit(e, formData, navigate)
            }
            sx={{
              bgcolor: "transparent",
              boxShadow: "none",
              mt: 5,
              px: loginPage ? 9 : 3,
              py: 7,
            }}
          >
            <CardContent>
              <Box>
                <Typography gutterBottom variant="h4" sx={{ fontWeight: 800 }}>
                  {heading}
                </Typography>
                <Typography
                  gutterBottom
                  variant="title1"
                  sx={{ color: "text.light" }}
                >
                  {description}
                </Typography>
                {loginPage && <GoogleButton />}
              </Box>

              {loginPage && (
                <Box sx={{ ...center, my: 3 }}>
                  <Divider sx={{ borderColor: "#ccc", width: "30%" }} />
                  <Typography
                    component="p"
                    variant="body2"
                    sx={{ color: "text.light", mx: 1 }}
                  >
                    Sign in with email
                  </Typography>
                  <Divider sx={{ borderColor: "#ccc", width: "30%" }} />
                </Box>
              )}
              <Box sx={{ mt: loginPage ? 1 : 4 }}>
                <AuthForm formData={formData} onChange={handleChange} />
              </Box>
            </CardContent>
            <CardActions sx={{ ...center, mb: 2 }}>
              <Button
                endIcon={icon}
                type="submit"
                size="large"
                variant="contained"
              >
                {buttonLabel}
              </Button>
            </CardActions>
            {bottomText}
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
            backgroundImage: `url(${authBg})`,
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
            {rightHeading}
          </Typography>
          <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
            {rightSubtext}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AuthPage;
