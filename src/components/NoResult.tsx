import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

const NoResult = () => {
  return (
    <Paper>
      <Alert severity="info" variant="outlined">
        No search results were found
        <Typography sx={{ fontSize: "10px" }}>
          Please refine your search query
        </Typography>
      </Alert>
    </Paper>
  );
};

export default NoResult;
