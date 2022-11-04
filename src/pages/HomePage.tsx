import Container from "@mui/material/Container";
import Box from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import HomeTab from "../components/HomeTab";
import RouterComponent from "../components/RouterComponent";
import SearchBar from "../components/SearchBar";
import Newest from "./Newest";
import Popular from "./Popular";

const HomePage = (): JSX.Element => {
  return (
    <Container>
      <Box sx={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <Header />
        <Box sx={{ paddingTop: "24px" }} />
        <Box sx={{ display: "flex" }}>
          {/* <SearchBar /> */}
          <RouterComponent>
            <HomeTab />
            <Routes>
              <Route path="/" element={<Newest />} />
              <Route path="/popular" element={<Popular />} />
            </Routes>
          </RouterComponent>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
