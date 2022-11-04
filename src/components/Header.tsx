import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = (): JSX.Element => {
  return (
    <>
      <Box sx={{ marginBottom: "24px" }}>
        <Typography variant="h5">NASA Image Explorer</Typography>
      </Box>
      <Divider />
      <Box></Box>
    </>
  );
};

export default Header;
