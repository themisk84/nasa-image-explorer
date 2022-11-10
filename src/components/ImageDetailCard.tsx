import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";

interface ImageDetailCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  id: string;
  photographer: string;
  keywords?: string[];
  location?: string;
}

const ImageDetailCard = ({
  image,
  title,
  photographer,
  date,
  description,
  location,
  id,
  keywords,
}: ImageDetailCardProps): JSX.Element => {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <Box sx={{ display: "flex" }}>
        <Box minWidth={"50%"} sx={{ display: "inline-grid", flex: "1 1 0%" }}>
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
            <Box
              sx={{
                display: "flex",
              }}
            >
              <PersonIcon
                sx={{
                  fontSize: "16px",
                  paddingRight: "4px",
                  paddingTop: "1px",
                  color: "rgba(0, 0, 0, 0.54)",
                }}
              />
              <Typography variant="subtitle2" color="rgb(25, 118, 210)">
                {photographer}
                <FiberManualRecordIcon
                  sx={{
                    fontSize: "5px",
                    padding: "0 3px 3px 3px",
                  }}
                />
                {date}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <PlaceIcon
                sx={{
                  color: "rgba(0, 0, 0, 0.54)",
                  fontSize: "16px",
                  paddingRight: "4px",
                  paddingTop: "1px",
                }}
              />
              <Typography variant="subtitle2" color="text.secondary">
                {location}
              </Typography>
            </Box>
            <Box sx={{ paddingTop: "8px" }} />
            <Typography variant="h5">{title}</Typography>
            <Box sx={{ paddingTop: "8px" }} />
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Box sx={{ flex: "1 1 0%" }} />
            <Box sx={{ display: "flex", flexWrap: "wrap", paddingTop: "16px" }}>
              {keywords?.map((keyword: string): JSX.Element => {
                return (
                  <Chip
                    key={keyword}
                    label={keyword}
                    sx={{
                      color: "rgb(63, 81, 181)",
                      backgroundColor: "rgb(232, 234, 246);",
                      margin: "0 8px 8px 0",
                      ":nth-of-type(even)": {
                        color: "#771ec5b9",
                        backgroundColor: "rgba(237, 224, 240, 0.9)",
                      },
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
