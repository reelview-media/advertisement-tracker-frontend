import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { API_BASE_URL } from "../utils/apiBaseUrl";

const GoogleButton = () => {
  console.log("api",API_BASE_URL);

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/api/v1/auth/google`;
  };
  return (
    <Button
      fullWidth
      startIcon={<GoogleIcon fontSize="large" sx={{ color: "#000" }} />}
      variant="outlined"
      size="large"
      sx={{
        textTransform: "none",
        fontWeight: 500,
        bgcolor: "#fff",
        color: "#000",
        borderColor: "#dadce0",
        "&:hover": {
          bgcolor: "#f7f8f8",
          borderColor: "#dadce0",
        },
      }}
     onClick={handleGoogleLogin}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
