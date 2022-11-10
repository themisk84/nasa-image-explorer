import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface TotalResultsProps {
  result: number;
}

const TotalResults = ({ result }: TotalResultsProps): JSX.Element => {
  const navigate = useNavigate();

  const goToMainPage = (event: React.SyntheticEvent): void => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", paddingBottom: "24px" }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5">Search Results</Typography>
        <Typography variant="subtitle1" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
          {result} results found
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={goToMainPage}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
};

export default TotalResults;
