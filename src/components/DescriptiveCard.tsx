import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

interface DescriptiveCardProps {
  image: string;
  title: string;
  center: string;
  date: string;
  description: string;
  id: string;
  keywords?: string[];
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2", transform: "scale(0.8)" }}
  >
    .
  </Box>
);

const DescriptiveCard = ({
  image,
  title,
  center,
  date,
  description,
  keywords,
  id,
}: DescriptiveCardProps) => {
  const navigate = useNavigate();

  const goToDetailCard = (id: string) => {
    navigate(`/details/${id}`);
  };
  return (
    <Card sx={{ height: "480px" }}>
      <CardActionArea onClick={() => goToDetailCard(id)}>
        <CardMedia component="img" image={image} height="200px" />
        <CardContent
          sx={{
            padding: "16px",
            minHeight: "262px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            component="div"
            variant="subtitle2"
            color="#1976d2"
            align="center"
          >
            {center}
            {bull}
            {date}
          </Typography>
          <Box sx={{ paddingTop: "8px" }} />
          <Typography variant="h5" component="div" className="trimmedTitle">
            {title}
          </Typography>
          <Box sx={{ paddingTop: "8px" }} />
          <Typography
            color="text.secondary"
            variant="body2"
            className=" trimmedTitle trimmedText"
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              flexShrink: "1",
              flexBasis: "0%",
            }}
          />
          <Box
            sx={{
              display: "inline-grid",
              gridAutoFlow: "column",
              columnGap: "8px",
              paddingTop: "16px",
              overflow: "auto",
              minHeight: "48px",
              maxWidth: "336px",
            }}
          >
            {keywords?.map((keyword: string): JSX.Element => {
              return (
                <Chip
                  key={keyword}
                  label={keyword}
                  sx={{
                    color: "rgb(63, 81, 181)",
                    backgroundColor: "rgb(232, 234, 246);",
                  }}
                />
              );
            })}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DescriptiveCard;
