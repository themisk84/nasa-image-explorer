import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { NEWEST_URL } from "../utils/urls";
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

const Newest = (): JSX.Element => {
  const [newPosts, setNewPosts] = useState<Collection>();

  useEffect((): void => {
    const fetchNewest = async () => {
      const data: BackendResponse = await fetchData(NEWEST_URL);
      const filtered = filterData(data.collection);
      setNewPosts(filtered);
    };

    fetchNewest();
  }, []);

  return (
    <Container>
      <Box sx={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <Header />
        <Box sx={{ display: "flex" }}>
          <SearchBar />
          <Box sx={{ paddingRight: "24px" }} />
          <Box>
            <HomeTab />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                paddingTop: "24px",
                gap: "24px",
              }}
            >
              {newPosts?.items.map((item: CardData) => {
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
  );
};

export default Newest;
