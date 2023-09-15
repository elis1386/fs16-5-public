import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Add } from "@mui/icons-material";

const Footer = () => {
  const [value, setValue] = useState("recents");

  return (
    <BottomNavigation value={value}>
      <BottomNavigationAction
        label="Load more"
        value="recents"
        icon={<Add />}
      />
    </BottomNavigation>
  );
};

export default Footer;
