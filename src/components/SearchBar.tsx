import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { fetchData } from "../utils/functions";
import { NEWEST_URL, SEARCH_URL } from "../utils/urls";
import { Collection, NasaData, CardData } from "../models/model";
import DescriptiveCard from "./DescriptiveCard";

// interface SearchBarProps {
//   keyword?: string;
//   location?: string;
//   setKeyword: React.Dispatch<React.SetStateAction<string>>;
//   setLocation: React.Dispatch<React.SetStateAction<string>>;
//   onSubmitForm: (event: React.FormEvent) => void;
// }

// const SearchBar = ({
//   keyword,
//   location,
//   setKeyword,
//   setLocation,
//   onSubmitForm,
// }: SearchBarProps): JSX.Element => {
// const [keyword, setKeyword] = useState<string>("");
// const [location, setLocation] = useState<string>("");
// const [results, setResults] = useState<Collection>();

const SearchBar = (): JSX.Element => {
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const navigate = useNavigate();

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?q=${keyword}&location=${location}`);
  };

  return (
    <Box>
      <form onSubmit={onFormSubmit}>
        <FormControl>
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
            />
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <Box sx={{ width: "100%" }}>
              <Button variant="contained" sx={{ width: "100%" }} type="submit">
                Search
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default SearchBar;
