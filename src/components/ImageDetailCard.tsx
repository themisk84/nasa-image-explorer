import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

interface ImageDetailCardProps {
  image: string;
  title: string;
  center: string;
  date: string;
  description: string;
  id: string;
  keywords?: string[];
}

const ImageDetailCard = ({
  image,
  title,
  center,
  date,
  description,
  id,
  keywords,
}: ImageDetailCardProps): JSX.Element => {
  return (
    <Paper>
      <Box display={"flex"}>
        <Box display={"inline-grid"} minWidth={"50%"} sx={{ flex: "1 1 0%" }}>
          <CardMedia component="img" image={image} />
        </Box>
        <Box minWidth={"50%"} sx={{ flex: "1 1 0%" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "16px",
            }}
          >
            <Typography variant="subtitle2">
              {center}
              {date}
            </Typography>
            <Box paddingTop={"8px"} />
            <Typography variant="h5">{title}</Typography>
            <Box paddingTop={"8px"} />
            <Typography variant="body2">{description}</Typography>
            <Box sx={{ flex: "1 1 0%" }} />
            <Box display={"flex"} flexWrap={"wrap"} paddingTop={"16px"}>
              {keywords?.map((keyword: string): JSX.Element => {
                return (
                  <Chip
                    key={keyword}
                    label={keyword}
                    sx={{
                      color: "rgb(63, 81, 181)",
                      backgroundColor: "rgb(232, 234, 246);",
                      margin: "0 8px 8px 0",
                    }}
                  />
                );
              })}
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Paper>
  );
};

export default ImageDetailCard;
