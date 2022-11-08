import React, { useCallback, useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

import {
  BackendResponse,
  Collection,
  ExifData,
  CardData,
  NasaData,
} from "../models/model";
import { fetchData, fetchExifData } from "../utils/functions";
import { EXIF_DATA_URL, SEARCH_URL } from "../utils/urls";
import ExifDataTable from "../components/ExifDataTable";
import ImageDetailCard from "../components/ImageDetailCard";

const DetailedCard = (): JSX.Element => {
  const [exifData, setExifData] = useState<ExifData>();
  const [imageDetails, setImageDetails] = useState<Collection>();
  const [selectedTab, setSelectedTab] = useState(0);
  const { id } = useParams();

  const getExifDetails = useCallback(async () => {
    const data: ExifData = await fetchExifData(EXIF_DATA_URL(id));
    setExifData(data);
  }, [id]);

  const getImageDetails = useCallback(async () => {
    const data: BackendResponse = await fetchData(SEARCH_URL(id));
    setImageDetails(data.collection);
  }, [id]);

  useEffect(() => {
    getImageDetails();
    getExifDetails();
  }, [getExifDetails, getImageDetails]);

  const handleChangeTabs = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setSelectedTab(newValue);
  };

  console.log(imageDetails);
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F9FAFB" }}>
      <Box
        sx={{
          paddingTop: "24px",
          borderBottom: "1px solid",
          borderColor: "rgba(0, 0, 0, 0.12)",
          backgroundColor: "white",
        }}
      >
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
            {imageDetails?.items.map((item) =>
              item.data.map((element) => (
                <Typography color={"rgba(0,0,0, 0.87)"}>
                  {element.title}
                </Typography>
              ))
            )}
          </Breadcrumbs>
          <Box sx={{ paddingTop: "8px", paddingBottom: "8px" }}>
            {imageDetails?.items.map((item) =>
              item.data.map((element) => (
                <Typography variant="h4">{element.title}</Typography>
              ))
            )}
          </Box>
          <Box sx={{ display: "flex", paddingBottom: "16px" }}>
            <Box
              sx={{
                paddingRight: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  paddingRight: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InfoOutlinedIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
              </Box>
              {imageDetails?.items.map((item) =>
                item.data.map((element) => (
                  <Typography
                    variant="body2"
                    sx={{ color: " rgba(0, 0, 0, 0.54)" }}
                  >
                    {element.nasa_id}
                  </Typography>
                ))
              )}
            </Box>
            <Box
              sx={{
                paddingRight: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  paddingRight: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HomeIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
              </Box>
              {imageDetails?.items.map((item) =>
                item.data.map((element) => (
                  <Typography
                    variant="body2"
                    sx={{ color: " rgba(0, 0, 0, 0.54)" }}
                  >
                    {element.center}
                  </Typography>
                ))
              )}
            </Box>
            <Box
              sx={{
                paddingRight: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  paddingRight: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CalendarMonthOutlinedIcon
                  sx={{ color: "rgba(0, 0, 0, 0.54)" }}
                />
              </Box>
              {imageDetails?.items.map((item) => {
                return item.data.map((element) => {
                  const datefied = new Date(
                    element.date_created
                  ).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  });

                  return (
                    <Typography
                      variant="body2"
                      sx={{ color: " rgba(0, 0, 0, 0.54)" }}
                    >
                      Created {datefied}
                    </Typography>
                  );
                });
              })}
            </Box>
          </Box>
          <Tabs value={selectedTab} onChange={handleChangeTabs}>
            <Tab label="IMAGE" />
            <Tab label="EXIF DATA" />
          </Tabs>
        </Container>
      </Box>
      <Container>
        <Box sx={{ paddingTop: "24px", paddingBottom: "80px" }}>
          {selectedTab === 0 &&
            imageDetails?.items.map((item: CardData) => {
              return item.data.map((element: NasaData): JSX.Element => {
                const datefied = new Date(
                  element.date_created
                ).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });

                return (
                  <ImageDetailCard
                    key={element.nasa_id}
                    image={item.links[0].href}
                    title={element.title}
                    center={element.center}
                    date={datefied}
                    description={element.description}
                    id={element.nasa_id}
                    keywords={element.keywords}
                  />
                );
              });
            })}
          {selectedTab === 1 && (
            <ExifDataTable
              apertureValue={exifData?.["EXIF:ApertureValue"]}
              artist={exifData?.["EXIF:Artist"]}
              cfaPattern={exifData?.["EXIF:CFAPattern"]}
              colorSpace={exifData?.["EXIF:ColorSpace"]}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default DetailedCard;
