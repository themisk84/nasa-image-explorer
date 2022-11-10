import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const DescriptiveCard = ({
  image,
  title,
  center,
  date,
  description,
  keywords,
  id,
}: DescriptiveCardProps): JSX.Element => {
  const navigate = useNavigate();

  const goToDetailCard = (id: string) => {
    navigate(`/details/${id}`);
  };
  return (
    <ThemeProvider theme={theme}>
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
              color="rgb(25, 118, 210)"
            >
              {center}
              <FiberManualRecordIcon
                sx={{
                  fontSize: "5px",
                  padding: "0 3px 3px 3px",
                }}
              />
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
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

export default DescriptiveCard;
