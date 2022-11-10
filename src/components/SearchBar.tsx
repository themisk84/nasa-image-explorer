import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";

const SearchBar = (): JSX.Element => {
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [page] = useState<number>(1);

  const navigate = useNavigate();

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?q=${keyword}&location=${location}&page=${page}`);
  };

  return (
    <Box>
      <form onSubmit={onFormSubmit}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "46ch" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PlaceIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ width: "100%" }}>
            <Button variant="contained" sx={{ width: "100%" }} type="submit">
              Search
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default SearchBar;
