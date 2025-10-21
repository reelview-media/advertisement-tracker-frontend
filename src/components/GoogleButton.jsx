import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import { signInWithGoogle } from "../config/firebaseConfig";

const GoogleButton = () => {
  return (
    <Button
      fullWidth
      startIcon={<GoogleIcon fontSize="large" sx={{ color: "#000"}} />}
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
      onClick={()=>signInWithGoogle()}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
