import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { POPULAR_URL } from "../utils/urls";

import { fetchData } from "../utils/functions";
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

const Popular = () => {
  const [popular, setPopular] = useState<Collection>();

  const fetchNewest = useCallback(async () => {
    const data: BackendResponse = await fetchData(POPULAR_URL);
    setPopular(data.collection);
  }, []);

  useEffect((): void => {
    fetchNewest();
  }, [fetchNewest]);

  return (
    <Box sx={{ paddingTop: "64px", paddingBottom: "80px" }}>
      <Box sx={{ marginBottom: "24px" }}>
        <Header />
      </Box>
      <Box sx={{ display: "flex" }}>
        <SearchBar />
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
            {popular?.items.map((item: CardData) => {
              return item.data.map((element: NasaData): JSX.Element => {
                const datefied = new Date(element.date_created).toDateString();

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
  );
};

export default Popular;
