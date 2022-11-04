import { ChangeEventHandler, SyntheticEvent, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomeTab from "./components/HomeTab";
import RouterComponent from "./components/RouterComponent";
import Newest from "./pages/Newest";
import Popular from "./pages/Popular";
import DetailedCard from "./components/DetailedCard";
import HomePage from "./pages/HomePage";

import DescriptiveCard from "./components/DescriptiveCard";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = (): JSX.Element => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          marginTop: "70px",
          paddingBottom: "80px",
        }}
      >
        <Box sx={{ marginBottom: "24px" }}>
          <Header />
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <SearchBar />
          <RouterComponent>
            <Box sx={{ width: "100%" }}>
              <HomeTab />
              <Routes>
                <Route path="/" element={<Newest />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/search" element={<SearchResultsPage />} />
              </Routes>
            </Box>
          </RouterComponent>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
