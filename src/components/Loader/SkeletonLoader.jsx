import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        color: "#fff",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={3}
        sx={{
          width: "80%",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {/* Title Skeleton */}
        <Skeleton
          variant="text"
          width="60%"
          height={80}
          sx={{
            background: "linear-gradient(90deg, #FF6FD8 0%, #9D60FB 50%, #4C9EFF)",
            borderRadius: "12px",
            animationDuration: "2s",
          }}
        />
        <Skeleton
          variant="text"
          width="50%"
          height={80}
          sx={{
            background: "linear-gradient(90deg, #FF6FD8 0%, #9D60FB 50%, #4C9EFF)",
            borderRadius: "12px",
            animationDuration: "2s",
          }}
        />
        {/* Subtext Skeleton */}
        <Skeleton
          variant="text"
          width="70%"
          height={40}
          sx={{
            background: "linear-gradient(90deg, #FF6FD8 0%, #9D60FB 50%, #4C9EFF)",
            borderRadius: "8px",
            animationDuration: "2s",
          }}
        />
      </Stack>
    </Box>
  );
};

export default SkeletonLoader;
