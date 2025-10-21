import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";

const VisionCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height:"100%",
        cursor: "pointer",
        bgcolor: `#fff`,
        boxShadow: "0px 0px 5px #2b2b81",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100%",
          height: 200,
          transition: "all 0.5s ease-in-out",
          
          "&:hover": { transform: "scale(1.2)" },
        }}
        src="https://plus.unsplash.com/premium_photo-1682309586073-902b5c4905b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1212"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontWeight: 800, color: "primary.main", textAlign: "center" }}
        >
          {item.title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.light" }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(VisionCard);
