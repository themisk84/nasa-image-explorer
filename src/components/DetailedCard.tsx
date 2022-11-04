import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Tabs from "@mui/material/Tabs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Tab } from "@mui/material";

interface DetailedCardProps {
  id: string;
  image: string;
  title: string;
  center: string;
  date: string;
  description: string;
  keywords?: string | string[];
}

const DetailedCard = ({
  id,
  title,
  center,
  image,
  date,
  description,
  keywords,
}: DetailedCardProps): JSX.Element => {
  return (
    <Box>
      <Box>
        <Container>
          <Breadcrumbs aria-label="breadcrump">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              NASA Image Explorer
            </Link>
            {title}
          </Breadcrumbs>
          <Box>
            <Typography>{title}</Typography>
          </Box>
          <Box>
            <Box>
              <Box>
                <InfoOutlinedIcon></InfoOutlinedIcon>
              </Box>
              <Typography variant="body2">{id}</Typography>
            </Box>
            <Box>
              <Box>
                <HomeIcon></HomeIcon>
              </Box>
              <Typography variant="body2">{center}</Typography>
            </Box>
            <Box>
              <Box>
                <CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>
              </Box>
              <Typography variant="body2">{date}</Typography>
            </Box>
          </Box>
          <Tabs>
            <Tab label="IMAGE"></Tab>
            <Tab label="EXIF DATA"></Tab>
          </Tabs>
        </Container>
      </Box>
    </Box>
  );
};

export default DetailedCard;
