import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { POPULAR_URL } from "../utils/urls";
import { fetchData, filterData } from "../utils/functions";

import {
  BackendResponse,
  Collection,
  CardData,
  NasaData,
} from "../models/model";

import DescriptiveCard from "../components/DescriptiveCard";
import HomeTab from "../components/HomeTab";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

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

const Popular = () => {
  const [popular, setPopular] = useState<Collection>();

  useEffect((): void => {
    const fetchPopular = async () => {
      const data: BackendResponse = await fetchData(POPULAR_URL);
      const filtered = filterData(data.collection);
      setPopular(filtered);
    };

    fetchPopular();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box sx={{ paddingTop: "64px", paddingBottom: "80px" }}>
          <Header />
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <SearchBar />
            <Box sx={{ paddingRight: "24px" }} />
            <Box>
              <HomeTab />
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: " 1fr",
                    sm: " 1fr",
                    md: "1fr 1fr",
                    lg: "1fr 1fr",
                    xl: "1fr 1fr",
                  },
                  paddingTop: "24px",
                  gap: "24px",
                }}
              >
                {popular?.items.map((item: CardData) => {
                  return item.data.map((element: NasaData): JSX.Element => {
                    const datefied = new Date(
                      element.date_created
                    ).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });
                    return (
                      <DescriptiveCard
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Popular;
