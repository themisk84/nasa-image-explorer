import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DescriptiveCard from "../components/DescriptiveCard";

import { NEWEST_URL, SEARCH_URL } from "../utils/urls";
import {
  Collection,
  CardData,
  NasaData,
  BackendResponse,
} from "../models/model";

import { fetchData } from "../utils/functions";
import NoResult from "../components/NoResult";
import { Typography } from "@mui/material";

const SearchResultsPage = () => {
  const [result, setResult] = useState<Collection>();

  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("q")?.toString();
  const location = new URLSearchParams(search).get("location")?.toString();

  // const fetchNewest = useCallback(async () => {
  //   const data: BackendResponse = await fetchData(
  //     SEARCH_URL(keyword, location)
  //   );
  //   setResult(data.collection);
  // }, [location, keyword]);

  const queryData = useCallback(async () => {
    let data: BackendResponse;

    if (!keyword && !location) {
      data = await fetchData(NEWEST_URL);
      setResult(data.collection);
    } else {
      data = await fetchData(SEARCH_URL(keyword, location));
      setResult(data.collection);
    }
  }, [keyword, location]);

  useEffect(() => {
    queryData();
  }, [queryData]);

  console.log("This is", keyword, location);

  console.log(result);

  return (
    <>
      <Box sx={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <Box sx={{ marginBottom: "24px" }}>
          <Header />
        </Box>
        <Box sx={{ display: "flex" }}>
          <SearchBar />
          {result?.items.length === 0 ? (
            <NoResult />
          ) : (
            <Box>
              <Box sx={{ display: "flex", paddingBottom: "24px" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5">Search Results</Typography>
                  <Typography variant="h6">{}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  paddingTop: "24px",
                  gap: "24px",
                }}
              >
                {result?.items.map((item: CardData) => {
                  return item.data.map((element: NasaData): JSX.Element => {
                    const datefied = new Date(
                      element.date_created
                    ).toDateString();

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
          )}
        </Box>
      </Box>
    </>
  );
};

export default SearchResultsPage;
