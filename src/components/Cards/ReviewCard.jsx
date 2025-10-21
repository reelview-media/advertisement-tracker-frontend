import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Rating,
} from "@mui/material";
import { center } from "../../styles/flexStyles";

const ReviewCard = ({ item }) => {
  return (
    <Card
      sx={{
        ...center,
        width: "100%",
        minHeight:250,
        height:'100%',
        borderRadius: 3,
        boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
        py:3,
        bgcolor: "primary.main",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="600"
          gutterBottom
          sx={{ color: "primary.contrastText" }}
        >
          {item.title}
        </Typography>
        <Rating name="read-only" value={item.rating} readOnly size="medium" />
        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          sx={{ mt: 1, color: "primary.contrastText" }}
        >
          “{item.feedback}”
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={item.img} alt={item.name} />
          <Typography fontWeight="600" sx={{ color: "primary.light" }}>
            {item.name}
          </Typography>
        </Box>
        <Typography variant="caption" color="secondary.light">
          {item.daysAgo}
        </Typography>
      </Box>
      </CardContent>

      
    </Card>
  );
};

export default React.memo(ReviewCard);
