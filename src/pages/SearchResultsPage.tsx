import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DescriptiveCard from "../components/DescriptiveCard";
import NoResult from "../components/NoResult";

import {
  Collection,
  CardData,
  NasaData,
  BackendResponse,
} from "../models/model";

import { fetchData } from "../utils/functions";
import { NEWEST_URL, SEARCH_URL } from "../utils/urls";

import TotalResults from "../components/TotalResults";

const SearchResultsPage = (): JSX.Element => {
  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("q")?.toString();
  const location = new URLSearchParams(search).get("location")?.toString();
  const page = new URLSearchParams(search).get("page")?.toString();

  const parsedPage = page !== undefined ? parseInt(page) : 1;

  const [result, setResult] = useState<Collection>();
  const [currentPage, setCurrentPage] = useState<number>(parsedPage);

  const navigate = useNavigate();

  useEffect(() => {
    const queryData = async () => {
      let data: BackendResponse;

      if (!keyword && !location) {
        data = await fetchData(NEWEST_URL);
        setResult(data.collection);
      } else {
        data = await fetchData(SEARCH_URL(keyword, location, currentPage));
        setResult(data.collection);
      }
    };

    queryData();
  }, [keyword, location, currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setCurrentPage(value);
    navigate(`/search?q=${keyword}&location=${location}&page=${value}`);
  };

  return (
    <Container>
      <Box sx={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <Header />
        <Box sx={{ display: "flex" }}>
          <SearchBar />
          <Box sx={{ paddingRight: "24px" }} />
          {result?.items.length === 0 ? (
            <NoResult />
          ) : (
            <Box>
              <TotalResults
                result={
                  result?.metadata?.total_hits !== undefined
                    ? result?.metadata?.total_hits
                    : 0
                }
              />
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "24px",
                }}
              >
                <Pagination
                  count={
                    result?.metadata?.total_hits !== undefined
                      ? Math.ceil(result.metadata?.total_hits / 100)
                      : 1
                  }
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default SearchResultsPage;
