import { Routes, Route, BrowserRouter } from "react-router-dom";

import Newest from "./pages/Newest";
import Popular from "./pages/Popular";
import DetailedCard from "./pages/DetailedCard";
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
