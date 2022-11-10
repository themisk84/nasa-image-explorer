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
      <Box sx={{ paddingTop: "24px" }} />
    </>
  );
};

export default Header;
