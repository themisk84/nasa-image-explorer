import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { NEWEST_URL, SEARCH_URL } from "../utils/urls";

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
import { useNavigate } from "react-router-dom";

const Newest = () => {
  const [newPosts, setNewPosts] = useState<Collection>();

  const fetchNewest = useCallback(async () => {
    const data: BackendResponse = await fetchData(NEWEST_URL);
    setNewPosts(data.collection);
  }, []);

  useEffect((): void => {
    fetchNewest();
  }, [fetchNewest]);

  // console.log(keyword);

  // const handleSubmit = async (
  //   event: React.FormEvent,
  //   word: string,
  //   place: string
  // ) => {
  //   event?.preventDefault();

  //   const data: BackendResponse = await fetchData(SEARCH_URL(word, place));
  //   setNewPosts(data.collection);
  // };

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
