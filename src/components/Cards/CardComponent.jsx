import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import { flexStart } from "../../styles/flexStyles";

const CardComponent = ({ bg, icon, label }) => {
  console.log("bg", bg);
  return (
    <Card
      sx={{
        bgcolor: bg ? "#cc0000" : "primary.main",
        width: "100%",
        p: 2,
        cursor: "pointer",
        "&:hover": {
          bgcolor: bg ? "primary.main" : "#cc0000",
          transform: "scale(1.05)",
          boxShadow: 3,
        },
      }}
    >
      <CardContent sx={{ ...flexStart }}>
        <IconButton
          sx={{
            bgcolor: "#fff",
            width: 50,
            height: 50,
            mr: 2,
            "&:hover": { bgcolor: "#ccc" },
          }}
        >
          {icon}
        </IconButton>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ color: "primary.contrastText", fontWeight: 500 }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(CardComponent);
