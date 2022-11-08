import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import RouterComponent from "./components/RouterComponent";
import Newest from "./pages/Newest";
import Popular from "./pages/Popular";
import DetailedCard from "./components/DetailedCard";

import DescriptiveCard from "./components/DescriptiveCard";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newest />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/details/:id" element={<DetailedCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
