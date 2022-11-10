import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface TotalResultsProps {
  result: number;
}
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 568,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

const TotalResults = ({ result }: TotalResultsProps): JSX.Element => {
  const navigate = useNavigate();

  const goToMainPage = (event: React.SyntheticEvent): void => {
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          paddingBottom: "24px",
          paddingTop: {
            xs: "10px",
            sm: "10px",
            md: "12px",
            lg: "0",
            xl: "0",
          },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontVariant: {
                xs: "h6",
                sm: "h6",
                md: "h6",
                lg: "h5",
                xl: "h5",
              },
            }}
          >
            Search Results
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.6)",
              fontVariant: {
                xs: "subtitle2",
                sm: "subtitle2",
                md: "subtitle1",
                lg: "subtitle1",
                xl: "subtitle1",
              },
            }}
          >
            {result} results found
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            startIcon={<ArrowBackIosIcon />}
            onClick={goToMainPage}
            sx={{
              backgroundColor: {
                xs: "green",
                sm: "green",
                md: "green",
                lg: "rgb(25, 118, 210)",
                xl: "rgb(25, 118, 210)",
              },
            }}
          >
            Home
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TotalResults;
