import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { center, spaceBetween } from "../../styles/flexStyles";
import { useLocation } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const smallMobile = useMediaQuery("(max-width:400px)");
  const location = useLocation();
  const aboutPage = location.pathname === "/about";

  return (
    <Card
      sx={{
        border: aboutPage ? "none" : "1px solid #ccc",
        width: "100%",
        height:'100%',
        p: aboutPage ? 0 : 3,
        ...(aboutPage ? {} : center),
        flexDirection: smallMobile || aboutPage ? "column" : "row",
        filter: "brightness(100%)",
        bgcolor: "background.default",
        cursor: "pointer",
        overflow: "hidden",
        transition:
          "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.9s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          filter: "brightness(110%)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* ✅ If About Page → show image */}
      {aboutPage ? (
        <Box
          component="img"
          src={item.img}
          alt={item.label}
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
          }}
        />
      ) : (
        <IconButton
          sx={{
            bgcolor: "#f2f2f2",
            p: 2,
            mr: smallMobile ? 0 : 1.5,
          }}
        >
          {item.icon}
        </IconButton>
      )}

      <CardContent
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            ...(smallMobile?center:""),
            flexDirection:'column'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign:smallMobile?"center":'start',
              color: "primary.main",
            }}
          >
            {item.label}
          </Typography>

          {!aboutPage && <Rating name="read-only" value={item.rating} readOnly size="small" />}
        </Box>
        <Box>
          {/* ✅ Only show description & partners on About Page */}
          {aboutPage && (
            <>
              <Typography
              gutterBottom
                variant="body2"
                sx={{
                  mt: 1,
                  color: "text.secondary",
                  textAlign: smallMobile ? "center" : "start",
                }}
              >
                {item.description}
              </Typography>

              <Box sx={{...spaceBetween}}>
                <Typography
                variant={"body2"}
                sx={{
                  mt: 1,
                  fontWeight: 600,
                  textAlign: smallMobile ? "center" : "start",
                }}
              >
                Our Partners: {item.numberOfPartner}
              </Typography>
              <Rating name="read-only" value={item.rating} readOnly size="medium" />
              </Box>
            </>
          )}

          {/* ✅ Show only partner count on non-about pages */}
          {!aboutPage && (
            <Typography
              gutterBottom
              variant="body2"
              sx={{
                fontWeight: 600,
                textAlign:smallMobile ? "center" : "start",
              }}
            >
              Our Partners: {item.numberOfPartner}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default React.memo(ServiceCard);
