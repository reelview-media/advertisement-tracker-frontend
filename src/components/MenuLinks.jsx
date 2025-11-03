import { Button, Typography } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { menuLinks } from "../data/menuLinksData";

const MenuLinks = ({ scrolled, useIn, closeSidebar }) => {
  const location = useLocation();
  const footer = useIn === "footer";
  const sidebar = useIn === "sidebar";
  return (
    <>
      {menuLinks.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Typography
            component={Link}
            to={item.path}
            key={item.id}
            variant="body2"
            sx={{
              mx: 3,
              color:isActive?"red":scrolled?"#000": "white",
              fontWeight: isActive ? 800 : 500,
              letterSpacing: 1,
              textAlign:'start',
              marginBottom:sidebar  || footer ? 2 : 0,
              "&:hover": {
                color: scrolled && isActive ? "#2b2b81" : "hover.main",
                borderBottom: !isActive?"3px solid #f3b229":"",
              }
            }}
            onClick={() => {
            if (useIn === "sidebar" && closeSidebar) closeSidebar();
             window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          >
            {item.name}
          </Typography>
        );
      })}
    </>
  );
};

export default MenuLinks;
