import React, { useState } from "react";
import { Avatar, Menu, MenuItem, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const user = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <Avatar src={user?.avatar || ""} alt={user?.full_name || "User"} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 3,
          sx: { mt: 1.5, minWidth: 180 },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate("/profile")}>
          <Typography textAlign="center">View Profile</Typography>
        </MenuItem>
        <LogoutBtn handleClose={handleClose} />
      </Menu>
    </>
  );
};

export default ProfileDropdown;
